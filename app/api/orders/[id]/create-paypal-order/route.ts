import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import OrderModel from "@/lib/models/orderModel";
import { paypal } from "@/lib/paypal";
import { getServerSession } from "next-auth";

export async function POST(...request: any) {
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
  if (order) {
    try {
      const paypalOrder = await paypal.createOrder(order.totalPrice);
      return Response.json(paypalOrder);
    } catch (error: any) {
      return Response.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    }
  } else {
    return Response.json(
      {
        message: "Order not found",
      },
      { status: 404 }
    );
  }
}
