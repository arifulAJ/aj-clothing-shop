import AddToCart from "@/components/products/AddToCart";
import { convertDocToObj } from "@/lib/utils";
import ProductService from "@/lib/services/productServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: String };
}) {
  const product = await ProductService.getBySlug(params?.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}
export default async function ProductDetails({
  params,
}: {
  params: { slug: String };
}) {
  const product = await ProductService.getBySlug(params.slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="my-2">
        <Link href={"/"}> back to products</Link>
      </div>

      <div className='grid md:grid-cols-4 md"gap-3'>
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li className="text-xl"> {product.name}</li>
            <li className="">
              {" "}
              {product.rating}of {product.numReviews} reviews
            </li>
            <li className=""> {product.brand}</li>
            <li className="divider"> Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-lg mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  $
                  {product.discounts !== undefined
                    ? product.price - product.price * product.discounts
                    : product.price}
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Unavilable"}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <AddToCart
                  item={{
                    ...convertDocToObj(product),
                    qty: 0,
                    color: "",
                    size: "",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
