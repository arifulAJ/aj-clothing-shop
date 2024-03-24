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
    <div className="px-32">
      <CheckoutSteps current={3} />
      <div className="grid md:grid-cols-4 md:gap-4 my-4">
        <div className="overflow-x-auto md:col-span-3">
          <div className="card bg-orange-200 ">
            <div className="card-body">
              <h2 className="card-title"> Shipping Address</h2>
              <p>{shippingAddress.fullName}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.city}{" "}
                {shippingAddress.postalCode}, {shippingAddress.country}{" "}
              </p>
              <div>
                <Link className="btn bg-emerald-300" href={"/shipping"}>
                  Edit
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-orange-200 mt-4">
            <div className="card-body">
              <h2 className="card-title"> Payment Method</h2>
              <p>{paymentMethod}</p>
              <div>
                <Link className="btn" href={"/payment"}>
                  Edit
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-orange-200 mt-4">
            <div className="card-body">
              <h2 className="card-title"> Items</h2>
              <table className="table">
                <thead>
                  {" "}
                  <tr>
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
                            width={50}
                            height={50}
                          />
                          <span className="px-2">
                            {item.name}
                            {item.color}
                            {item.size}
                          </span>
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
                <Link className="btn" href={"/"}>
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-orange-200  p-4">
            <div className="cadr-body">
              <h2 className="card-title">Order Sumary</h2>
              <ul className="space-y-3">
                <li>
                  <div className="flex justify-between">
                    <div>Itmes</div>
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
                </li>
                <li>
                  <div className="flex justify-between">
                    <div>Total</div>
                    <div>${totalPrice - savign}</div>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-primary w-full"
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
