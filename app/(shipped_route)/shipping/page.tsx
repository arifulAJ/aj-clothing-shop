import { Metadata } from "next";

import Form from "./Form";

export const metadata: Metadata = {
  title: "Shipping address",
};

export default async function ShippingPage() {
  return <Form />;
}
