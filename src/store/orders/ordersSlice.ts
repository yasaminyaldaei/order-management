import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  addProductToOrder,
  getOrders,
  placeOrder,
  removeProductFromOrder,
} from "../../api/orders";
import {
  transformOrder,
  transformProductToOrderItem,
} from "../../api/orders/transformers";
import { ModifyOrder, Order, PlaceOrder, Product } from "../../types";
import { displayAlert } from "../../utils/displayAlert";
import { generateOrder } from "../../utils/generateOrder";

export interface OrdersState {
  ordersList: Array<Order>;
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
      return {
        orderId,
        product: response as Product,
      };
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
      return {
        orderId,
        productId,
      };
    } catch (error) {
      displayAlert({ message: error.message });
    }
  }
);

export const placeOrderAsync = createAsyncThunk(
  "orders/placeOrder",
  async ({ customerId }: PlaceOrder) => {
    try {
      const response = await placeOrder({ customerId });
      return {
        customerId,
      };
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
      if (action.payload) {
        state.ordersList = action.payload.map(transformOrder);
      } else {
        state.ordersList = [];
      }
    });
    builder.addCase(ordersAsync.rejected, (state) => {
      state.ordersList = [];
    });
    builder.addCase(removeProductFromOrderAsync.fulfilled, (state, action) => {
      const orderId = action.payload?.orderId;
      const productId = action.payload?.productId;

      state.ordersList = state.ordersList.map((order) => {
        if (order.orderId === orderId) {
          order.items = order.items.filter(
            (item) => item.productId !== productId
          );
        }
        return order;
      });
    });
    builder.addCase(addProductToOrderAsync.fulfilled, (state, action) => {
      const orderId = action.payload?.orderId;
      const product = action.payload?.product;

      if (product) {
        const newOrderItem = transformProductToOrderItem(product);
        state.ordersList = state.ordersList.map((order) => {
          if (order.orderId === orderId) {
            order.items = [...order.items, newOrderItem];
          }
          return order;
        });
      }
    });
    builder.addCase(placeOrderAsync.fulfilled, (state, action) => {
      const customerId = action.payload?.customerId;

      if (customerId) {
        state.ordersList = [
          ...state.ordersList,
          generateOrder({
            customerId,
            ordersCount: state.ordersList.length,
          }),
        ];
      }
    });
  },
});

export const selectOrders = (state: RootState) => state.orders.ordersList;

export default ordersSlice.reducer;
