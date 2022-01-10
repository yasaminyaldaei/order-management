import { Customer, ModifyOrder, PlaceOrder, Product } from "../../types";
import { displayAlert } from "../../utils/displayAlert";
import {
  ADD_PRODUCT_EP,
  CUSTOMERS_EP,
  ORDERS_EP,
  PLACE_ORDER_EP,
  PRODUCTS_EP,
  REMOVE_PRODUCT_EP,
} from "./endpoints";

export const getOrders = () =>
  fetch(ORDERS_EP).then((response) => response.json());

export const addProductToOrder = ({ productId }: ModifyOrder) =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(PRODUCTS_EP);
    const products = (await response.json()) as Product[];

    const productToBeAdded = products.find(
      (product) => product.id === productId
    );
    if (productToBeAdded) {
      resolve(productToBeAdded);
    } else {
      reject({ message: "Product Not Found!" });
    }
  });

export const removeProductFromOrder = ({ orderId, productId }: ModifyOrder) =>
  new Promise((resolve, reject) => {
    resolve({
      status: 200,
    });
  });

export const placeOrder = ({ customerId }: PlaceOrder) =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(CUSTOMERS_EP);
    const customers = (await response.json()) as Customer[];

    const customer = customers.find((customer) => customer.id === customerId);
    if (customer) {
      resolve({
        status: 200,
      });
    } else {
      reject({ message: "Customer Not Found!" });
    }
  });
