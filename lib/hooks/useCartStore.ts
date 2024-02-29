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
      const updateCardItems = exist
        ? items.map((x) => (x.slug ? { ...exist, qty: exist.qty + 1 } : x))
        : [...items, { ...item, qty: 1 }];

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
    decreses: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);

      if (!exist) return;
      const updateCardItems =
        exist.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) =>
              item.slug ? { ...exist, qty: exist.qty - 1 } : x
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
      });
    },
    init: () => cartStore.setState(initialState),
  };
}

const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc - item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 200 ? 0 : 100),
    taxPrice = round2(Number(0.15 * itemsPrice)),
    totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
