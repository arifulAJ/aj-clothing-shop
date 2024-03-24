import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModels";
import OrderModel, { OrderItem } from "@/lib/models/orderModel";
import { round2 } from "@/lib/utils";

import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const calcPrices = (orderItems: OrderItem[]) => {
  // Calculate the items price
  const itemsPrice = round2(
    orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Calculate the shipping price
  const shippingPrice = round2(itemsPrice > 100 ? 10 : 0);
  // Calculate the tax price
  const taxPrice = round2(Number((0.15 * itemsPrice).toFixed(2)));
  // Calculate the total price
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export async function POST(request: Request) {
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

  try {
    const payload = await request.json();

    await dbConnect();

    const dbProductPrices = await ProductModel.find(
      {
        _id: { $in: payload.items.map((x: { _id: string }) => x._id) },
      },
      "price"
    );

    // const dbOrderItems = payload.items.map((x: { _id: string }) => ({
    //   ...x,
    //   product: x._id,
    //   price: dbProductPrices.find((x: any) => x?._id === x._id)?.price,
    //   _id: undefined,
    // }));
    const dbOrderItems = payload.items.map((item: { _id: string }) => {
      const productPrice = dbProductPrices.find((product: any) =>
        product._id.equals(item?._id)
      );

      return {
        ...item,
        product: item?._id, // Assuming item._id is the product ID
        price: productPrice ? productPrice.price : 0, // Set price to 0 if product price is not found
        _id: undefined,
      };
    });
    const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
      calcPrices(dbOrderItems);

    const newOrder = new OrderModel({
      items: dbOrderItems,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingAddress: payload.shippingAddress,
      paymentMethod: payload.paymentMethod,
      user: userId,
    });

    const createdOrder = await newOrder.save();

    return Response.json(
      { message: "Order has been created", order: createdOrder },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving order:", error);
    return Response.json(
      { message: "Failed to save order", error: error.message },
      { status: 500 }
    );
  }
}
