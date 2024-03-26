import { cache } from "react";
import dbConnect from "@/lib/dbConnect";

import ProductModel, { Product } from "@/lib/models/ProductModels";
export const revlaitdate = 300;
const getLatest = cache(async () => {
  await dbConnect();
  const products = await ProductModel.find({}).sort({ _id: -1 });

  return products as Product[];
});

const getFeatured = cache(async () => {
  await dbConnect();
  const products = await ProductModel.find({ isFeatured: true })
    .limit(5)
    .lean();
  return products as Product[];
});

const getBySlug = cache(async (slug: String) => {
  await dbConnect();
  const products = await ProductModel.findOne({ slug }).lean();
  return products as Product;
});
const getByCollection = cache(async (collectionProduct: String) => {
  await dbConnect();
  const products = await ProductModel.find({ collectionProduct }).lean();
  return products as Product[];
});
const getByCatagory = cache(async (category: String | undefined) => {
  await dbConnect();
  const products = await ProductModel.find({ category }).lean();
  return products as Product[];
});

const ProductService = {
  getLatest,
  getFeatured,
  getBySlug,
  getByCollection,
  getByCatagory,
};
export default ProductService;
