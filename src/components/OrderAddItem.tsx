import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToOrderAsync } from "../store/orders/ordersSlice";
import { ModifyOrder } from "../types";

export function OrderAddItem({ orderId }: ModifyOrder) {
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();

  const handleChangeProductId = (event: ChangeEvent<HTMLInputElement>) => {
    setProductId(event.target.value);
  };

  const handleSubmitAdd = () => {
    dispatch(addProductToOrderAsync({ orderId, productId }));
  };

  if (!orderId) return null;

  return (
    <form onSubmit={handleSubmitAdd}>
      <label>
        Add a product:
        <input
          type="text"
          placeholder="Product Id"
          value={productId}
          onChange={handleChangeProductId}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
