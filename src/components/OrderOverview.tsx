import React from "react";
import { Order } from "../types";
import { OrderItemOverview } from "./OrderItemOverview";
import { OrderRemoveItem } from "./OrderRemoveItem";

interface IOrdersOverviewProps extends Order {
  displayRemoveItem?: boolean;
}

export function OrderOverview({
  orderId,
  customerId,
  items,
  total,
  displayRemoveItem = false,
}: IOrdersOverviewProps) {
  return (
    <div>
      <span>{orderId}</span>
      <span>{customerId}</span>
      <span>
        {items.map((orderItem) => (
          <div key={orderItem.productId}>
            {displayRemoveItem && (
              <OrderRemoveItem
                orderId={orderId}
                productId={orderItem.productId}
              />
            )}
            <OrderItemOverview {...orderItem} />
          </div>
        ))}
      </span>
      <span>{total}</span>
    </div>
  );
}
