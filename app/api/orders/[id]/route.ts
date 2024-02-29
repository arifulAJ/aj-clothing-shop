import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import OrderModel from "@/lib/models/orderModel";

export async function GET(...request: any) {
  const [req, { params }] = request;

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

  await dbConnect();
  const order = await OrderModel.findById(params.id);

  return Response.json(order);
}
