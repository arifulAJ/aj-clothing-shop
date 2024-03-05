import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { ErrorReporter } from "@/lib/validator/ErrorRepoter";
import { registerSchema } from "@/lib/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/lib/models/userModal";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validator = vine.compile(registerSchema);
    validator.errorReporter = () => new ErrorReporter();
    const output = await validator.validate(body);
    await dbConnect();
    //  chacke is email exist
    const user = await UserModel.findOne({ email: output.email });
    if (user) {
      return NextResponse.json(
        { status: 400, errors: { email: "Email already exists" } },
        { status: 200 }
      );
    } else {
      //  encrypt the password
      const salt = bcrypt.genSaltSync(10);
      output.password = await bcrypt.hash(output.password, salt);
      await UserModel.create(output);
      return NextResponse.json(
        { status: 200, message: "Account created successfully ! pleace login" },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { status: 400, errors: error.messages },
        { status: 200 }
      );
    }
  }
}
