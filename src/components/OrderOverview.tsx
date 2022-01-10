import React from "react";
import { Link } from "react-router-dom";
import { GOTO_ORDER_DETAILS_PAGE } from "../routes";
import { Order } from "../types";
import { OrderItemOverview } from "./OrderItemOverview";

export function OrderOverview({ orderId, customerId, items, total }: Order) {
  return (
    <Link to={GOTO_ORDER_DETAILS_PAGE(orderId)}>
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
    </Link>
  );
}
