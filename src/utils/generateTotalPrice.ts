import { Quantity, Price } from "../types";

interface IGenerateTotalProductPrice {
  quantity: Quantity;
  unitPrice: Price;
}

export function generateTotalProductPrice({
  quantity,
  unitPrice,
}: IGenerateTotalProductPrice) {
  return String(Number(quantity) * Number(unitPrice));
}

export function generateTotalOrderPrice(
  ...totalProductPrices: Array<Price>
): Price {
  return String(
    totalProductPrices.reduce((previousValue, currentValue) => {
      return Number(previousValue) + Number(currentValue);
    }, 0)
  );
}
