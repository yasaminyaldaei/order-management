import axios from "axios";
import { ORDERS_EP } from "./endpoints";

export const getOrders = () => axios.get(ORDERS_EP);
