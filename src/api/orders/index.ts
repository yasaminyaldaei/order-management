import { ORDERS_EP } from "./endpoints";

export const getOrders = () =>
  fetch(ORDERS_EP).then((response) => response.json());
