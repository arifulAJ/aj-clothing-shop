"use client";

import useCartService from "@/lib/hooks/useCartStore";
import { OrderItem } from "@/lib/models/orderModel";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();
  const { items, increase, decreses } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();
  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);
  const addToCarthandeler = () => {
    increase(item);
  };
  console.log(existItem, "add to card itme");
  console.log(items, "all the items");
  return existItem ? (
    <div className="card-actions justify-center align-middle ">
      <button className="btn" type="button" onClick={() => decreses(existItem)}>
        {" "}
        -{" "}
      </button>
      <span className="px-2"> {existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <div>
      <div className="card-actions justify-center ">
        <button
          className="btn btn-primary w-full"
          type="button"
          onClick={addToCarthandeler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
