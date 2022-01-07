import { ID } from "../../types";
import { ADD_PRODUCT_EP, ORDERS_EP, REMOVE_PRODUCT_EP } from "./endpoints";

export const getOrders = () =>
  fetch(ORDERS_EP).then((response) => response.json());

export const addProductToOrder = ({
  orderId,
  productId,
}: {
  orderId: ID;
  productId: ID;
}) =>
  fetch(ADD_PRODUCT_EP, {
    method: "POST",
    body: JSON.stringify({ orderId, productId }),
  });

export const removeProductFromOrder = ({
  orderId,
  productId,
}: {
  orderId: ID;
  productId: ID;
}) =>
  fetch(REMOVE_PRODUCT_EP, {
    method: "POST",
    body: JSON.stringify({ orderId, productId }),
  });
