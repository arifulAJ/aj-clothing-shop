import AddToCart from "@/components/products/AddToCart";
import { convertDocToObj } from "@/lib/utils";
import ProductService from "@/lib/services/productServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShippingCard from "@/components/continueShopping/shippingCard";

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

  const reletedProduct = await ProductService.getByCatagory(product.category);

  return (
    <div className=" px-2 md:px-20 py-8">
      <button className="my-2 btn bg-orange-400 text-black border-none hover:text-white capitalize">
        <Link href={"/"}> back to products</Link>
      </button>

      <div className="grid md:grid-cols-2 gap-3 py-6 mx-auto">
        <div className="">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className=" "
          ></Image>
        </div>

        <div className="px-2 md:px-16 py-2 md:py-6">
          <div className="">
            <p className=" text-xl md:text-3xl font-bold text-orange-800 capitalize">
              {product.name}
            </p>
          </div>
          <div className=" md:text-2xl font-bold text-black py-6">
            <span>
              $
              {product.discounts !== undefined
                ? product.price - product.price * product.discounts
                : product.price}
            </span>
            <span className="line-through font-light md:text-xl text-gray-500 px-12">
              {product.discounts !== undefined && `$ ${product.price}`}
            </span>
          </div>
          <div className="md:text-xl font-bold text-black pb-6">
            <span>Status</span>
            <span className="px-12">
              {product.countInStock > 0 ? "In Stock" : "Unavilable"}
            </span>
          </div>
          <hr style={{ padding: "0.40px" }} className=" my-6 bg-orange-600" />
          {product.countInStock !== 0 && (
            <AddToCart
              item={{
                ...convertDocToObj(product),
                qty: 0,
                color: "",
                size: "",
              }}
            />
          )}{" "}
          <hr style={{ padding: "0.40px" }} className=" my-6 bg-orange-600" />
          <p className="text-black py-4">
            CATEGORY:{" "}
            <span className="text-gray-400 hover:text-orange-400">
              {product.category}
            </span>
          </p>
          <div className="flex  items-center">
            <span className="pr-4 text-black">
              Reviews ({product.numReviews})
            </span>{" "}
            {[1, 2, 3, 4, 5].map((index) => (
              <svg
                key={index}
                className={`bi bi-star-fill ${
                  index <= product.rating ? "text-warning" : ""
                }`}
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl  text-center underline text-black py-8">
          Description
        </h1>
        <p className=" px-2 md:px-8 text-gray-700 font-normal">
          {" "}
          {product.description}
        </p>
      </div>
      {reletedProduct.length === 1 ? (
        <></>
      ) : (
        <div className="py-4">
          <p className="text-black text-2xl font-bold py-8">Related products</p>
          <div className="grid grid-cols-3 gap-4">
            {reletedProduct.map((itme) =>
              product.name === itme.name ? (
                <></>
              ) : (
                <ShippingCard item={itme} key={itme._id?.toString()} />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
