import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderOverview } from "../components/OrderOverview";
import { ordersAsync, selectOrders } from "../store/orders/ordersSlice";
import { Order } from "../types";

export function OrdersMain() {
  const dispatch = useDispatch();
  const ordersList = useSelector(selectOrders);

  useEffect(() => {
    dispatch(ordersAsync());
  }, []);

  useEffect(() => {
    console.log(ordersList);
  }, [ordersList]);

  return (
    <div>
      {ordersList.map((order: Order) => (
        <OrderOverview key={order.orderId} {...order} />
      ))}
    </div>
  );
}
