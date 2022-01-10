import { ModifyOrder, PlaceOrder } from "../../types";
import { displayAlert } from "../../utils/displayAlert";
import {
  ADD_PRODUCT_EP,
  ORDERS_EP,
  PLACE_ORDER_EP,
  REMOVE_PRODUCT_EP,
} from "./endpoints";

export const getOrders = () =>
  fetch(ORDERS_EP).then((response) => response.json());

export const addProductToOrder = ({ orderId, productId }: ModifyOrder) =>
  fetch(ADD_PRODUCT_EP, {
    method: "POST",
    body: JSON.stringify({ orderId, productId }),
  });

export const removeProductFromOrder = ({ orderId, productId }: ModifyOrder) =>
  new Promise((resolve, reject) => {
    resolve({
      status: 200,
    });
  });

export const placeOrder = ({ customerId, items }: PlaceOrder) =>
  fetch(PLACE_ORDER_EP, {
    method: "POST",
    body: JSON.stringify({ customerId, items }),
  });
