import React from "react";
import { useDispatch } from "react-redux";
import { removeProductFromOrderAsync } from "../store/orders/ordersSlice";
import { ModifyOrder } from "../types";

export function OrderRemoveItem({ orderId, productId }: ModifyOrder) {
  const dispatch = useDispatch();

  const handleClickRemove = () => {
    dispatch(removeProductFromOrderAsync({ orderId, productId }));
  };

  return (
    <button onClick={handleClickRemove}>
      <span>&#10006;</span>
    </button>
  );
}
