import React from "react";
import { OrderItem } from "../types";

export function OrderItemOverview({
  productId,
  quantity,
  unitPrice,
  total,
}: OrderItem) {
  return (
    <div>
      <span>{productId}</span>
      <span>{quantity}</span>
      <span>{unitPrice}</span>
      <span>{total}</span>
    </div>
  );
}
