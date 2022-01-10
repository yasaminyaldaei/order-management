export type ID = string;
export type Quantity = string;
export type Price = string;

export interface Product {
  id: ID;
  description: string;
  category: string;
  price: Price;
}

export interface OrderItem {
  productId: ID;
  quantity: Quantity;
  unitPrice: Price;
  total: Price;
}

export interface Order {
  orderId: ID;
  customerId: string;
  items: Array<OrderItem>;
  total: Price;
}

export interface ModifyOrder {
  orderId?: ID;
  productId?: ID;
}

export interface PlaceOrderItems {
  productId: string;
}

export interface PlaceOrder {
  customerId: string;
  items: Array<PlaceOrderItems>;
}
