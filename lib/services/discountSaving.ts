import { useState, useEffect } from "react";
import { Product } from "../models/ProductModels";
import { OrderItem } from "../models/orderModel";

// Custom hook to calculate and manage savings
export const useSavings = (items: OrderItem[]) => {
  const [saving, setSaving] = useState<number>(0);

  // Calculate total savings for all items
  useEffect(() => {
    const totalSavings = items.reduce((total, item) => {
      // Check if the item has a defined discount
      if (typeof item.discounts === "number") {
        // Calculate saving for each item with a defined discount
        const saving = item.price * item.discounts * item.qty;
        // Accumulate saving to total
        return total + saving;
      } else {
        // If the item has no discount, return the current total without adding anything
        return total;
      }
    }, 0);

    setSaving(totalSavings);
  }, [items]);

  return saving;
};
