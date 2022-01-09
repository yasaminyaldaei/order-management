import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductToOrder,
  getOrders,
  placeOrder,
  removeProductFromOrder,
} from "../../api/orders";
import { transformOrder } from "../../api/orders/transformers";
import { ModifyOrder, Order, PlaceOrder } from "../../types";
import { displayAlert } from "../../utils/displayAlert";

export interface OrdersState {
  ordersList: Array<Order>;
}

const initialState: OrdersState = {
  ordersList: [],
};

export const ordersAsync = createAsyncThunk("orders/fetchOrders", async () => {
  try {
    const response = await getOrders();
    return response.map(transformOrder);
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

export const placeOrderAsync = createAsyncThunk(
  "orders/placeOrder",
  async ({ customerId, items }: PlaceOrder) => {
    try {
      const response = await placeOrder({ customerId, items });
      return response;
    } catch (error) {
      displayAlert({ message: error.message });
    }
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ordersAsync.fulfilled, (state, action) => {
      state.ordersList = action.payload;
    });
  },
});

export const selectOrders = (state: any) => state.orders.ordersList;

export default ordersSlice.reducer;
