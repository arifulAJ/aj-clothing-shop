import { Order } from "@/lib/models/orderModel";

import useAxios from "@/utils/axiose/useAxiouse";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserPaymentHistory = () => {
  const router = useRouter();
  const { data: orders, error } = useAxios(`/api/orders/mine`);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  if (error) return "An error has occurred.";
  // if (!orders) return "Loading...";
  // Type assertion to ensure orders is always an array
  if (!Array.isArray(orders)) {
    // Handle the case where orders is not an array (e.g., loading state)
    return <div>Loading...</div>;
  }
  return (
    <div className="overflow-x-auto bg-gray-100 p-2 text-black h-screen">
      {orders.length === 0 ? (
        <div>
          <div>
            <p className="text-center md:text-2xl ">
              You don&apos;t have any orders yet! Start shopping now and your
              order history will appear here
            </p>
            <img
              className="md:block hidden  w-full  "
              src="https://res.cloudinary.com/arifulislam/image/upload/v1711603477/Screenshot_2024-03-28_112317_lon29h.png"
              alt="cart"
            />
          </div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr className="text-black bg-gray-300 font-bold text-sm">
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>PAYMENT METHOD</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>

                <td>
                  {order.isPaid && order.paidAt
                    ? `${order.paidAt.substring(0, 10)}`
                    : "not paid"}
                </td>
                <td>
                  {order.isDelivered && order.deliveredAt
                    ? `${order.deliveredAt.substring(0, 10)}`
                    : "not delivered"}
                </td>
                <td>{order.paymentMethod}</td>
                <td>
                  <Link href={`/order/${order._id}`} passHref>
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserPaymentHistory;
