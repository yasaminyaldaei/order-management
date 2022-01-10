import React from "react";
import { Order } from "../types";
import { OrderItemOverview } from "./OrderItemOverview";
import { OrderRemoveItem } from "./OrderRemoveItem";

export function OrderOverview({ orderId, customerId, items, total }: Order) {
  return (
    <div>
      <span>{orderId}</span>
      <span>{customerId}</span>
      <span>
        {items.map((orderItem) => (
          <div key={orderItem.productId}>
            <OrderRemoveItem
              orderId={orderId}
              productId={orderItem.productId}
            />
            <OrderItemOverview {...orderItem} />
          </div>
        ))}
      </span>
      <span>{total}</span>
    </div>
  );
}
