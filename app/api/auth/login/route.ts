import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/lib/models/userModal";
import { ErrorReporter } from "@/lib/validator/ErrorRepoter";
import { logInSchema } from "@/lib/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validator = vine.compile(logInSchema);
    validator.errorReporter = () => new ErrorReporter();
    const output = await validator.validate(body);
    await dbConnect();
    const user = await UserModel.findOne({ email: output.email });
    if (user) {
      const chackePassword = bcrypt.compareSync(output.password, user.password);
      if (chackePassword) {
        return NextResponse.json(
          {
            status: 200,
            message: "User Logged In",
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { status: 400, errors: { email: "pleace Chack your Creadential" } },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { status: 400, errors: { email: "no Account found by this email" } },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, errors: error.messages },
        { status: 200 }
      );
    }
  }
}
