// import { cache } from "react";
// import dbConnect from "@/lib/dbConnect";
// import OrderModel, { Order } from "../models/orderModel";

// const getOrderByUserId = async () => {
//   try {
//     await dbConnect();
//     const orders = await OrderModel.find();
//     return orders as Order[];
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     throw error; // Rethrow the error for the calling code to handle
//   }
// };

// const orderServices = {
//   getOrderByUserId,
// };
// export default orderServices;
