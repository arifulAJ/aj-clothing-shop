import { create } from "zustand";
import { round2 } from "../utils";
import { OrderItem, ShippingAddress } from "../models/orderModel";
import { persist } from "zustand/middleware";

type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  paymentMethod: string;
  shippingAddress: ShippingAddress;
};

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  paymentMethod: "PayPal",
  shippingAddress: {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  },
};

//cart Store
export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: "cartStor",
  })
);

export default function useCartService() {
  const {
    items,
    itemsPrice,
    totalPrice,
    shippingPrice,
    taxPrice,
    paymentMethod,
    shippingAddress,
  } = cartStore();

  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
    shippingAddress,

    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      const updatedCardItems = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...x, qty: x.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedCardItems);
      cartStore.setState({
        items: updatedCardItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
    decreses: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);

      if (!exist) return;
      const updateCardItems =
        exist.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug ? { ...x, qty: x.qty - 1 } : x
            );
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updateCardItems);
      cartStore.setState({
        items: updateCardItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
    saveShippingAddress: (shippingAddress: ShippingAddress) => {
      cartStore.setState({ shippingAddress });
    },
    savePaymentMethod: (paymentMethod: string) => {
      cartStore.setState({ paymentMethod });
    },
    clear: () => {
      cartStore.setState({
        items: [],
        itemsPrice: 0,
      });
    },
    init: () => cartStore.setState(initialState),
  };
}

const calcPrice = (items: OrderItem[]) => {
  let itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = round2(itemsPrice > 200 ? 0 : 20);
  const taxRate = 0.15; // Assuming tax rate is always 15%
  const taxPrice = round2(Number(taxRate * itemsPrice));

  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice: itemsPrice + shippingPrice + taxPrice,
  };
};
