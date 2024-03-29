import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, required: true, default: false },
    collectionProduct: { type: String, required: true },

    discounts: { type: Number },

    banner: String,
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default ProductModel;

export type Product = {
  _id?: String;
  name: string;
  slug: string;
  image: string;
  banner?: string;
  price: number;
  brand: string;
  description: string;
  isFeatured: true;
  collectionProduct: string;
  discounts?: number;

  countInStock: number;
  category?: string;
  rating: number;
  numReviews?: number;
  colors?: [];
  size?: [];
};
