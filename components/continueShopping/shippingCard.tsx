import { Product } from "@/lib/models/ProductModels";
import Link from "next/link";
import React from "react";

const ShippingCard = ({ item }: { item: Product }) => {
  return (
    <div>
      <div className="card    shadow">
        <figure>
          <img className="h-60 " src={item.image} alt={item.name} />
        </figure>
        <div className="card-body ">
          <p className="flex justify-between text-black font-light">
            <span>$ {item.price}</span>{" "}
            <span>InStack: {item.countInStock} pcs</span>
          </p>
          <hr />
          <h4 className="card-title text-black capitalize">{item.name}</h4>
          <p className="text-gray-900 font-light">
            {item.description.slice(0, 100)} ...{" "}
          </p>

          <Link href={`/product/${item.slug}`}>
            <button className="btn border-none text-white bg-orange-600 ">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingCard;
