"use client";

import { Order } from "@/lib/models/orderModel";

import useAxios from "@/utils/axiose/useAxiouse";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function OrderDetails({
  orderId,
  paypalClientId,
}: {
  orderId: string;
  paypalClientId: string;
}) {
  const { data: session } = useSession();

  function createPayPalOrder() {
    return fetch(`/api/orders/${orderId}/create-paypal-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((order) => order.id);
  }
  function onAprovePaypalOrder(data: any) {
    return fetch(`/api/orders/${orderId}/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((orderData) => console.log(orderData, "this is might be doo"));
  }
  const { data, error } = useAxios<Order>(`/api/orders/${orderId}`);

  if (error) return error.message;
  if (!data) return <div>Loading...</div>;
  const {
    paymentMethod,
    shippingAddress,
    shippingPrice,
    items,
    itemsPrice,
    taxPrice,
    totalPrice,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
  } = data;

  let save: any = [];

  items.map((item) => {
    if (item.discounts) {
      save.push(item.price * item?.discounts);
    }
  });
  const sum = save.reduce((total: number, num: number) => total + num, 0);

  return (
    <div className="px-2 md:px-20">
      <div className="grid md:grid-cols-4 md:gap-4 my-4 py-12">
        <div className="overflow-x-auto md:col-span-2 lg:col-span-3">
          <div className=" grid lg:grid-cols-2  gap-4 justify-between">
            <div className="capitalize text-black bg-gray-100 rounded-xl p-4">
              <h2 className="card-title"> Shipping Address</h2>
              <p>{shippingAddress.fullName}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.city}{" "}
                {shippingAddress.postalCode}, {shippingAddress.country}{" "}
              </p>
              {isDelivered ? (
                <div className="text-success"> Delivered at {deliveredAt}</div>
              ) : (
                <div className="text-error">Not Delivered</div>
              )}
            </div>
            <div className="card bg-gray-100  text-black">
              <div className="card-body">
                <h2 className="card-title"> Payment Method</h2>
                <p>{paymentMethod}</p>
                {paidAt ? (
                  <div className="text-success">Paid at {paidAt}</div>
                ) : (
                  <div className="text-error">Not Paid</div>
                )}
              </div>
            </div>
          </div>

          <div className="card text-black bg-gray-100 mt-4">
            <div className="card-body">
              <h2 className="card-title"> Items</h2>
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
                  {items.map((item: any) => (
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
                          ${" "}
                          {item.discounts > 0
                            ? item.price - item.price * item.discounts
                            : item.price}{" "}
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
        <div className="md:col-span-2 lg:col-span-1 text-black">
          <div className="card bg-gray-100  p-4">
            <div className="cadr-body">
              <h2 className="card-title">Order Sumary</h2>
              <ul className="space-y-3">
                <li>
                  <div className="flex justify-between">
                    <div>Sub Total</div>
                    <div>${itemsPrice - sum}</div>
                  </div>
                  <p className="flex justify-between text-gray-600 font-light">
                    <span>saving</span>
                    <span className="line-through">${sum}</span>
                  </p>
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
                      <span className="font-light text-sm">Free Shipping</span>
                    ) : (
                      <></>
                    )}
                  </p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <div>Grand Total</div>
                    <div>${totalPrice - sum}</div>
                  </div>
                </li>
                {!isPaid && paymentMethod === "PayPal" && (
                  <li>
                    <PayPalScriptProvider
                      options={{ clientId: paypalClientId }}
                    >
                      <PayPalButtons
                        createOrder={createPayPalOrder}
                        onApprove={onAprovePaypalOrder}
                      />
                    </PayPalScriptProvider>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
