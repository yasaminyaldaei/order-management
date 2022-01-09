import React from "react";
import { Order } from "../types";

export function OrderOverview({ orderId, customerId, items, total }: Order) {
  return (
    <div>
      <span>{orderId}</span>
      <span>{customerId}</span>
      <span>
        {items.map((orderItem) => (
          <div></div>
        ))}
      </span>
      <span>{total}</span>
    </div>
  );
}
