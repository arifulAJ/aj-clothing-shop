// import data from "@/lib/data";
// import dbConnect from "@/lib/dbConnect";
// import productModel from "@/lib/models/ProductModels";
// import UserModel from "@/lib/models/userModal";
// import { NextRequest, NextResponse } from "next/server";

// export const GET = async (request: NextRequest) => {
//   const { users, products } = data;
//   console.log(users, products, "this get product");
//   await dbConnect();
//   await UserModel.deleteMany();
//   await UserModel.insertMany(users);
//   await productModel.deleteMany();
//   await productModel.insertMany(products);

//   return NextResponse.json({
//     message: "seed successfully",
//     users,
//     products,
//   });
// };
