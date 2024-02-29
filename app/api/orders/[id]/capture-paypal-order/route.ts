import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import OrderModel from "@/lib/models/orderModel";
import { paypal } from "@/lib/paypal";
import { getServerSession } from "next-auth";

export async function POST(...request: any) {
  const [req, { params }] = request;
  // // Extract orderId from the URL pathname
  // const urlParts = req.url.split("/");
  // const orderId = urlParts[urlParts.length - 2];
  // console.log(orderId, "i am order id ");
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
  // if problem arise on orderId
  const order = await OrderModel.findById(params.id);

  if (order) {
    try {
      const { orderID } = await req.json();
      console.log(order, "this is order method in payment controller");
      const captureData = await paypal.capturePayment(orderID);
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: captureData.id,
        update_time: captureData.update_time,
        email_address: captureData.payer.email_address,
      };
      const updateOrder = await order.save();
      return Response.json(updateOrder);
    } catch (error: any) {
      return Response.json({ message: error.message }, { status: 500 });
    }
  } else {
    return Response.json({ message: "Order not found" }, { status: 404 });
  }
}
