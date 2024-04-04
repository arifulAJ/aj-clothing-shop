import React from "react";
import CartDeatils from "./cartDetails";
import ProductService from "@/lib/services/productServices";
export const metadata = {
  title: "Shopping Cart",
};

const CartPage = () => {
  return <CartDeatils />;
};

export default CartPage;
