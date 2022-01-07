import { Product, Quantity } from "../types";
import { generateTotalProductPrice } from "./generateTotalPrice";

interface IGenerateOrderItemInputs {
  product: Product;
  quantity: Quantity;
}

export function generateOrderItem({
  product,
  quantity,
}: IGenerateOrderItemInputs) {
  return {
    productId: product.id,
    quantity,
    unitPrice: product.price,
    total: generateTotalProductPrice({ quantity, unitPrice: product.price }),
  };
}
