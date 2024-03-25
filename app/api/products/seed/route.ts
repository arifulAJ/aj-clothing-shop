// import data from '@/lib/data'
// import dbConnect from '@/lib/dbConnect'
// import ProductModel from '@/lib/models/ProductModels'
// import UserModel from '@/lib/models/userModal'

// import { NextRequest, NextResponse } from 'next/server'

// export const GET = async (request: NextRequest) => {
//   const { users, products } = data
//   await dbConnect()
//   await UserModel.deleteMany()
//   await UserModel.insertMany(users)

//   await ProductModel.deleteMany()
//   await ProductModel.insertMany(products)

//   return NextResponse.json({
//     message: 'seeded successfully',
//     users,
//     products,
//   })
// }

import data from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModels";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { products } = data;

  await dbConnect();

  // await Discount.insertMany(discount);

  await ProductModel.deleteMany();
  await ProductModel.insertMany(products);

  return NextResponse.json({
    message: "seeded successfully",

    products,
  });
};
