import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ordersSlice from "./orders/ordersSlice";

export const store = configureStore({
  reducer: {
    orders: ordersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
