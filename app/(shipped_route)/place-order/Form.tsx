"use client";
import CheckoutSteps from "@/components/orderPlace/CheckoutSteps";
import useCartService from "@/lib/hooks/useCartStore";
import { useSavings } from "@/lib/services/discountSaving";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const router = useRouter();
  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,

    clear,
  } = useCartService();
  const savign = useSavings(items);

  async function handleSubmit() {
    const postData = {
      paymentMethod,
      shippingAddress,
      items,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    };

    try {
      const res = await axios.post(`/api/orders`, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;

      if (res.status === 201) {
        alert(data.message);
        clear();

        router.push(`/order/${res.data.order._id}`);
        // Call the clear function to clear all cart items after successful order placement
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order");
    }
  }

  useEffect(() => {
    if (!paymentMethod) {
      return router.push("/payment");
    }

    if (items.length === 0) {
      return router.push("/");
    }
  }, [paymentMethod, router]);
  return (
    <div className="px-2 md:px-20">
      <CheckoutSteps current={3} />
      <div className="grid md:grid-cols-4 md:gap-4 my-4 py-4 md:py-12">
        <div className="overflow-x-auto md:col-span-2 lg:col-span-3">
          <div className=" grid lg:grid-cols-2  gap-4 justify-between">
            <div className="capitalize text-black bg-gray-100 rounded-xl p-4">
              <h2 className="md:text-xl font-bold md:pb-4">
                {" "}
                Shipping Address
              </h2>
              <p>{shippingAddress.fullName}</p>
              <p className="py-1 md:py-4">
                {shippingAddress.address}, {shippingAddress.city}{" "}
                {shippingAddress.postalCode}, {shippingAddress.country}{" "}
              </p>
              <div>
                <Link
                  className="btn bg-orange-700 text-white border-none"
                  href={"/shipping"}
                >
                  Edit
                </Link>
              </div>
            </div>

            <div className="text-black bg-gray-100  rounded-xl p-4">
              <h2 className="md:text-xl font-bold"> Payment Method</h2>
              <p className="py-4">{paymentMethod}</p>
              <Link
                className="btn bg-orange-700 text-white border-none "
                href={"/payment"}
              >
                Edit
              </Link>
            </div>
          </div>

          <div className=" text-black rounded p-1 md:p-6 bg-gray-100 mt-4">
            <div className="">
              <h2 className="md:text-2xl"> Products</h2>
              <table className="table">
                <thead>
                  {" "}
                  <tr className="text-black text-sm font-bold">
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.slug}>
                      <td>
                        <Link
                          className="flex items-center"
                          href={`/product/${item.slug}`}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={200}
                            height={200}
                            title={item.name}
                          />
                          <p className="px-2 hidden md:block">
                            {item.name}
                            {item.color}
                            {item.size}
                          </p>
                        </Link>
                      </td>
                      <td>
                        <span> {item.qty}</span>
                      </td>
                      <td>
                        <span>
                          {" "}
                          {item.discounts === undefined
                            ? item.price
                            : item.price - item.price * item?.discounts}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div>
                <Link
                  className="btn bg-orange-700 text-white border-none "
                  href={"/"}
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div className="card bg-gray-100  text-black my-4 md:my-0  p-4">
            <div className="cadr-body">
              <h2 className="card-title md:text-xl pb-2">Order Sumary</h2>
              <ul className="space-y-3">
                <li>
                  <div className="flex justify-between">
                    <div>Sub Total</div>
                    <div>${itemsPrice - savign}</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div>Tax</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div>Shipping</div>
                    <div>${shippingPrice} </div>
                  </div>
                  <p>
                    {shippingPrice === 0 ? (
                      <span className="font-light">Free Shipping</span>
                    ) : (
                      <></>
                    )}
                  </p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div> Grand Total</div>
                    <div>${(totalPrice - savign).toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn bg-orange-700 text-white hover:bg-black border-none w-full"
                    onClick={() => handleSubmit()}
                  >
                    {" "}
                    Place Order
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
