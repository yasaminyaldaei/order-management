import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { placeOrderAsync } from "../store/orders/ordersSlice";

export function OrderPlace() {
  const [customerId, setCustomerId] = useState("");
  const dispatch = useDispatch();

  const handleChangeCustomerId = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerId(event.target.value);
  };

  const handleSubmitOrder = () => {
    dispatch(placeOrderAsync({ customerId }));
  };

  return (
    <form onSubmit={handleSubmitOrder}>
      <label>
        Enter Customer Id:
        <input
          type="text"
          placeholder="Customer Id"
          value={customerId}
          onChange={handleChangeCustomerId}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
