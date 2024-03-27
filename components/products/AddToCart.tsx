"use client";

import useCartService from "@/lib/hooks/useCartStore";
import { OrderItem } from "@/lib/models/orderModel";

import { useState, useEffect } from "react";

export default function AddToCart({ item }: { item: OrderItem }) {
  const { items, increase, decreses } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();
  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);
  const addToCarthandeler = () => {
    increase(item);
  };

  return existItem ? (
    <div className="card-actions justify-center align-middle ">
      <button
        className="btn text-white bg-orange-700 border-none md:text-2xl font-bold hover:text-white"
        type="button"
        onClick={() => decreses(existItem)}
      >
        {" "}
        -{" "}
      </button>
      <span className="px-2"> {existItem.qty}</span>
      <button
        className="btn text-white bg-orange-700 border-none md:text-2xl font-bold hover:text-white"
        type="button"
        onClick={() => increase(existItem)}
      >
        +
      </button>
    </div>
  ) : (
    <div>
      <div className="card-actions justify-center ">
        <button
          className="btn  text-white bg-orange-700 border-none md:text-xl font-bold hover:text-white w-full"
          type="button"
          onClick={addToCarthandeler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
