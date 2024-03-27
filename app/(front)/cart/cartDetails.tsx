"use client";
import useCartService from "@/lib/hooks/useCartStore";
import { useSavings } from "@/lib/services/discountSaving";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartDeatils() {
  const router = useRouter();
  const {
    items,
    itemsPrice,
    decreses,
    increase,
    shippingPrice,
    shippingAddress,
  } = useCartService();
  const [mounted, setMounted] = useState(false);

  const saving = useSavings(items);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;
  return (
    <div className=" mx-2 md:px-20">
      <h1 className="py-4 md:py-10 md:text-3xl text-orange-700 font-bold ">
        {" "}
        Cart
      </h1>
      {items.length === 0 ? (
        <div className="py-10 text-3xl text-orange-700 font-bold ">
          Cart is empty, <Link href={"/"}>Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 md:gap-5">
          <div className="overflow-x-auto md:col-span-2">
            <table className="table ">
              <thead>
                <tr className="text-black font-bold  uppercase ">
                  <th>Product</th>

                  <th className="hidden md:block">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <div className="flex  ">
                        <Link href={`/product/${item.slug}`}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                          />
                        </Link>
                        <div className="pl-2 md:pl-6">
                          <Link href={`/product/${item.slug}`}>
                            <p className="px-2 text-black font-light md:text-xl capitalize">
                              {" "}
                              {item.name}
                            </p>
                          </Link>
                          <p className="px-2 py-4  ">
                            {item.discounts === undefined ? (
                              <></>
                            ) : (
                              <span className="line-through">
                                {" "}
                                $ {item.price}
                              </span>
                            )}
                            <span className="text-black px-2">
                              {" "}
                              ${" "}
                              {item.discounts === undefined
                                ? item.price
                                : item.price - item.price * item.discounts}
                            </span>
                          </p>
                          {item.discounts === undefined ? (
                            <></>
                          ) : (
                            <span className="border rounded  p-1 capitalize  text-black">
                              save ${item.price * item.discounts}
                            </span>
                          )}
                          <div className=" py-4 md:py-6 ">
                            <span
                              className="border rounded md:text-xl p-1 text-black
                            "
                            >
                              <button
                                className="px-2 hover:text-orange-700"
                                type="button"
                                onClick={() => decreses(item)}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span className="px-2">{item.qty}</span>
                              <button
                                className="px-2 hover:text-orange-500"
                                // className="btn text-white bg-orange-500 border-none md:text-xl font-bold hover:text-white"
                                type="button"
                                onClick={() => increase(item)}
                              >
                                {" "}
                                +{" "}
                              </button>
                            </span>
                          </div>
                          <div className="md:hidden block">
                            <div className="text-black ">
                              Total: ${" "}
                              {item.discounts === undefined
                                ? item.price * item.qty
                                : item.qty * item.price -
                                  item.price * item.discounts}
                            </div>
                            <div className="py-4">
                              {item.discounts === undefined ? (
                                <></>
                              ) : (
                                <span className="border rounded p-2 capitalize  text-black">
                                  Total save: $
                                  {item.qty * item.price * item.discounts}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="underline pt-2 text-black font-light">
                            Remove Item
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="hidden md:block">
                      <div className="text-black ">
                        ${" "}
                        {item.discounts === undefined
                          ? item.price * item.qty
                          : item.qty * item.price - item.price * item.discounts}
                      </div>
                      <div className="py-4">
                        {item.discounts === undefined ? (
                          <></>
                        ) : (
                          <span className="border rounded p-2 capitalize  text-black">
                            save ${item.qty * item.price * item.discounts}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4">
            <p className="uppercase text-black items-end  ">cart totals</p>
            <hr />
            <ul className="py-4">
              <li>
                <div className="pb-3 text-xl ">
                  <div className="flex justify-between font-light text-black pb-3 capitalize">
                    <p>subtotal:</p>
                    <p>${itemsPrice - saving}</p>
                  </div>
                  <hr />
                  {/* Subtotal ({items.reduce((a, c) => a + c.qty, 0)}):{" "}
                  {saving === 0 ? (
                    <span className="text-green-900">${itemsPrice}</span>
                  ) : (
                    <span className="line-through">${itemsPrice}</span>
                  )} */}

                  <p className="text-black py-3 font-light">
                    {saving !== 0 ? (
                      <p className="flex justify-between">
                        {" "}
                        <span>Saviengs</span> <span>${saving}</span>
                      </p>
                    ) : (
                      <></>
                    )}
                  </p>
                  <hr />
                  <p className="flex justify-between capitalize text-black pt-3 font-light">
                    <span>shipping</span> <span>${shippingPrice}.00</span>
                    {/* {dis===undefined?itemsPrice:itemsPrice - (items.map(x=>x.price * (1 - x.discounts) * x.qty))} */}
                  </p>
                  <p className="font-light text-sm capitalize pt-2 text-black">
                    {shippingPrice === 0 ? "free shipping" : ""}
                  </p>
                  <p className="font-light text-sm capitalize text-black py-4">
                    {shippingAddress.address}, {shippingAddress.city},
                    {shippingAddress.country}
                  </p>
                  <p className="font-light text-sm capitalize py-2 text-black">
                    {shippingPrice === 0 ? (
                      <div>
                        <p>free shipping</p> <p>${shippingPrice}.00</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </p>
                  <hr />
                  <p className="flex justify-between text-black pt-3 capitalize">
                    <span>total</span>{" "}
                    <span>${itemsPrice + shippingPrice - saving}</span>
                    {/* {dis===undefined?itemsPrice:itemsPrice - (items.map(x=>x.price * (1 - x.discounts) * x.qty))} */}
                  </p>
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("/shipping")}
                  className="btn bg-orange-700 hover:bg-black border-none text-white font-bold text-xl
                    w-full"
                >
                  {" "}
                  Proceed to Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
