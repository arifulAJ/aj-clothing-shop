import { uplodeImage } from "@/lib/cloudinary/uplode-image";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/lib/models/userModal";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
dbConnect();

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  const user = session?.user as { _id: string };
  const userId = user._id;
  const formData = await req.formData();

  const image = formData.get("image") as unknown as File;

  try {
    if (!userId) {
      throw new Error("Missing user ID or image data");
    }
    const data: any = await uplodeImage(image, "aj-shop");

    //Find the user by ID and update the image
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { image: data.secure_url },
      { new: true }
    );

    return NextResponse.json({ mag: updatedUser }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
