import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import OrderModel from "@/lib/models/orderModel";

export async function GET(req: any) {
  // Check if the user is authenticated
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return Response.json(
      { message: "unauthorized" },
      {
        status: 401,
      }
    );
  }
  const user = session?.user as { _id: string | { ObjectId: any } };
  const userId = user._id.toString(); // Convert _id to string
  console.log(userId, "id of user");
  await dbConnect();
  const orders = await OrderModel.find({ user: userId });
  console.log(orders, "this form get route");
  return Response.json(orders);
}
