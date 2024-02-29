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
      <div className="max-w-sm mx-auto bg-white my-4">
        <div className="card-body">
          <h1 className="card-title">Payment Method</h1>
          <form onSubmit={handleSubmit}>
            {["PayPal", "Stripe", "CashOneDelivery"].map((payment) => (
              <div key={payment}>
                <label className="label cursor-pointer">
                  <span className="label-text">{payment}</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="radio"
                    value={payment}
                    checked={selectedPaymentMethod === payment}
                    onChange={() => setSelectedPaymentMethod(payment)}
                  ></input>
                </label>
              </div>
            ))}
            <div className="my-2">
              <button type="submit" className="btn btn-primary w-full">
                Next
              </button>
            </div>
            <div className="my-2">
              <button
                onClick={() => router.back()}
                type="button"
                className="btn w-full my-2  "
              >
                {" "}
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
