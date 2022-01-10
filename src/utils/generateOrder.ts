import { ID, Order } from "../types";

interface IGenerateOrder {
  ordersCount: number;
  customerId: ID;
}

export function generateOrder({
  ordersCount,
  customerId,
}: IGenerateOrder): Order {
  return {
    orderId: String(ordersCount + 1),
    customerId: customerId,
    items: [],
    total: "0",
  };
}
