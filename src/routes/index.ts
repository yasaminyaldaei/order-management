import { ID } from "../types";

export const ORDERS_MAIN_PAGE = "/orders";
export const ORDER_DETAILS_PAGE = `${ORDERS_MAIN_PAGE}/:orderId`;

export const GOTO_ORDER_DETAILS_PAGE = (id: ID) => `${ORDERS_MAIN_PAGE}/${id}`;
