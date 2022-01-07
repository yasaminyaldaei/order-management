export type ID = string;
export type Quantity = string;
export type TotalPrice = string;
export type UnitPrice = string;

export interface Product {
  id: ID;
  description: string;
  category: string;
  price: UnitPrice;
}

export interface OrderItem {
  productId: ID;
  quantity: Quantity;
  unitPrice: UnitPrice;
  total: TotalPrice;
}

export interface Order {
  orderId: ID;
  customerId: string;
  items: Array<OrderItem>;
  total: TotalPrice;
}

export interface ModifyOrder {
  orderId: ID;
  productId: ID;
}

export interface PlaceOrderItems {
  productId: string;
}

export interface PlaceOrder {
  customerId: string;
  items: Array<PlaceOrderItems>;
}
