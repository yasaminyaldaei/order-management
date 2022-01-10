import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OrderOverview } from "../components/OrderOverview";
import { selectOrders } from "../store/orders/ordersSlice";

export function OrderDetailsPage() {
  const { orderId } = useParams();
  const ordersList = useSelector(selectOrders);
  const orderDetails = ordersList.find((order) => order.orderId === orderId);

  if (!orderDetails) return null;
  return (
    <div>
      <OrderOverview {...orderDetails} />
    </div>
  );
}
