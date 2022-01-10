import React from "react";
import { Order } from "../types";
import { OrderItemOverview } from "./OrderItemOverview";

export function OrderOverview({ orderId, customerId, items, total }: Order) {
  return (
    <div>
      <span>{orderId}</span>
      <span>{customerId}</span>
      <span>
        {items.map((orderItem) => (
          <OrderItemOverview {...orderItem} />
        ))}
      </span>
      <span>{total}</span>
    </div>
  );
}
