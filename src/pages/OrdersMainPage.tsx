import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OrderOverview } from "../components/OrderOverview";
import { ordersAsync, selectOrders } from "../store/orders/ordersSlice";
import { Order } from "../types";
import { GOTO_ORDER_DETAILS_PAGE } from "../routes";
import { OrderPlace } from "../components/OrderPlace";

export function OrdersMainPage() {
  const dispatch = useDispatch();
  const ordersList = useSelector(selectOrders);

  useEffect(() => {
    dispatch(ordersAsync());
  }, []);

  return (
    <div>
      <OrderPlace />
      {ordersList && ordersList.length !== 0
        ? ordersList.map((order: Order) => (
            <Link
              key={order.orderId}
              to={GOTO_ORDER_DETAILS_PAGE(order.orderId)}
            >
              <OrderOverview {...order} />
            </Link>
          ))
        : null}
    </div>
  );
}
