import { ID, Order, Quantity, Price, OrderItem } from "../../types";

export interface APIOrderItem {
  "product-id": ID;
  quantity: Quantity;
  "unit-price": Price;
  total: Price;
}

export interface APIOrder {
  id: ID;
  "customer-id": ID;
  items: Array<APIOrderItem>;
  total: Price;
}

export function transformOrder(data: APIOrder): Order {
  return {
    orderId: data.id,
    customerId: data["customer-id"],
    items: data.items.map(transformOrderItem),
    total: data.total,
  };
}

export function transformOrderItem(data: APIOrderItem): OrderItem {
  return {
    productId: data["product-id"],
    quantity: data.quantity,
    unitPrice: data["unit-price"],
    total: data.total,
  };
}
