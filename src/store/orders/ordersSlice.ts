import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductToOrder,
  getOrders,
  removeProductFromOrder,
} from "../../api/orders";
import { ModifyOrder, Order } from "../../types";
import { displayAlert } from "../../utils/displayAlert";

export interface OrdersState {
  ordersList: Array<Order>;
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

export const ordersAsync = createAsyncThunk("orders/fetchOrders", async () => {
  try {
    const response = await getOrders();
    return response;
  } catch (error) {
    displayAlert({ message: error.message });
  }
});

export const addProductToOrderAsync = createAsyncThunk(
  "orders/addProductToOrder",
  async ({ orderId, productId }: ModifyOrder) => {
    try {
      const response = await addProductToOrder({ orderId, productId });
      return response;
    } catch (error) {
      displayAlert({ message: error.message });
    }
  }
);

export const removeProductFromOrderAsync = createAsyncThunk(
  "orders/removeProductFromOrder",
  async ({ orderId, productId }: ModifyOrder) => {
    try {
      const response = await removeProductFromOrder({ orderId, productId });
      return response;
    } catch (error) {
      displayAlert({ message: error.message });
    }
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<PlaceOrderPayload>) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ordersAsync.fulfilled, (state, action) => {
      state.ordersList = [...state.ordersList, action.payload];
    });
  },
});

export const selectOrders = (state: any) => state.orders.ordersList;

export default ordersSlice.reducer;
