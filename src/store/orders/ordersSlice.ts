import {
  createSlice,
  Reducer,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "..";

export interface OrderItem {
  productId: string;
  quantity: string;
  unitPrice: string;
  total: string;
}

export interface Order {
  id: string;
  customerId: string;
  items: Array<OrderItem>;
  total: string;
}

export interface OrdersState {
  ordersList: Array<Order>;
}

export interface ModifyOrderPayload {
  orderId: string;
}

export interface PlaceOrderItemsPayload {
  productId: string;
}

export interface PlaceOrderPayload {
  customerId: string;
  items: Array<PlaceOrderItemsPayload>;
}

const initialState: OrdersState = {
  ordersList: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addProductToOrder: (state, action: PayloadAction<ModifyOrderPayload>) => {
      return state;
    },
    removeProductFromOrder: (
      state,
      action: PayloadAction<ModifyOrderPayload>
    ) => {
      return state;
    },
    placeOrder: (state, action: PayloadAction<PlaceOrderPayload>) => {
      return state;
    },
  },
});

export default {} as Reducer<unknown, AnyAction>;
