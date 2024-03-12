import ProductService from "@/lib/services/productServices";
import React from "react";
import FlashDealCart from "./flashDealCart";
import Responsive from "./slider";

const FlashDeal = async () => {
  const featureProducts = await ProductService.getFeatured();

  return (
    <div className="px-2 md:px-8 lg:px-24">
      <h1 className="text-black font-semibold text-2xl">Flash Deals</h1>
      <p className="text-black  font-light">Up to 45 % off</p>
      {/* product cart  */}
      <Responsive item={featureProducts} />
      {/* <div className="carousel w-full">
        <div className="grid  grid-flow-col gap-4 carousel-item overflow-hidden   relative ">
          {featureProducts.map((item, index) => (
            <div>
              <FlashDealCart key={item._id?.toString()} item={item} />
             
            </div>
          ))}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FlashDeal;
