import {
  createSlice,
  Reducer,
  AnyAction,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "..";
import { getOrders } from "../../api/orders";

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

export const ordersAsync = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await getOrders();
  return response;
});

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
  extraReducers: (builder) => {
    builder.addCase(ordersAsync.fulfilled, (state, action) => {
      state.ordersList = [...state.ordersList, action.payload];
    });
  },
});

export const { addProductToOrder, removeProductFromOrder, placeOrder } =
  ordersSlice.actions;

export const selectOrders = (state: any) => state.orders.ordersList;

export default ordersSlice.reducer;
