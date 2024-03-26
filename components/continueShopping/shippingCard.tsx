import { Product } from "@/lib/models/ProductModels";
import Link from "next/link";
import React from "react";

const ShippingCard = ({ item }: { item: Product }) => {
  return (
    <div>
      <div className="  border-none   ">
        <img className="h-60 " src={item.image} alt={item.name} />

        <div className="py-4 ">
          <h4 className="card-title text-black capitalize">{item.name}</h4>
          <p className=" text-black font-bold py-3">$ {item.price}</p>
          <p className="text-black pb-3">InStack: {item.countInStock} pcs</p>
          <p className="text-black pb-3">Catagory: {item.category} </p>

          <Link href={`/product/${item.slug}`}>
            <button className="btn border-none text-white w-full bg-orange-600 ">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingCard;
