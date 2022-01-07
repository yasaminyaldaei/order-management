import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersAsync, selectOrders } from "./store/orders/ordersSlice";

function App() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(ordersAsync());
  }, []);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return <div></div>;
}

export default App;
