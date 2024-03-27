"use client";
import CheckoutSteps from "@/components/orderPlace/CheckoutSteps";
import useCartService from "@/lib/hooks/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Form = () => {
  const router = useRouter();
  const { savePaymentMethod, paymentMethod, shippingAddress } =
    useCartService();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push("/shipping");
    }
    setSelectedPaymentMethod(paymentMethod || "PayPal");
  }, [paymentMethod, router, shippingAddress]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    savePaymentMethod(selectedPaymentMethod);
    router.push("/place-order");
  };

  return (
    <div>
      <CheckoutSteps current={2} />
      <div className="max-w-sm mx-auto px-4 md:px-0  bg-white my-4">
        <div className="">
          <h1 className=" text-black font-bold text-2xl pt-10">
            Payment Method
          </h1>
          <form onSubmit={handleSubmit}>
            {["PayPal", "Stripe", "CashOneDelivery"].map((payment) => (
              <div key={payment}>
                <label className="label cursor-pointer ">
                  <span className="label-text text-black">{payment}</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="radio "
                    value={payment}
                    checked={selectedPaymentMethod === payment}
                    onChange={() => setSelectedPaymentMethod(payment)}
                  ></input>
                </label>
              </div>
            ))}
            <div className="my-2">
              <button
                type="submit"
                className="btn bg-orange-700  text-white border-none w-full"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>
              </button>
            </div>
            <div className="my-2">
              <button
                onClick={() => router.back()}
                type="button"
                className="btn text-white  border-none w-full my-2  "
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                </svg>{" "}
                Back{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
