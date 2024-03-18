import ProductService from "@/lib/services/productServices";
import React from "react";

import Responsive from "./slider";

const FlashDeal = async () => {
  const featureProducts = await ProductService.getFeatured();

  return (
    <div className="px-2 md:px-8 lg:px-24">
      <h1 className="text-black font-semibold text-2xl">Flash Deals</h1>
      <p className="text-black  font-light">Up to 25 % off</p>
      {/* product cart  */}

      <Responsive item={featureProducts} />
    </div>
  );
};

export default FlashDeal;
