import { Quantity, UnitPrice, TotalPrice } from "../types";

interface IGenerateTotalProductPrice {
  quantity: Quantity;
  unitPrice: UnitPrice;
}

export function generateTotalProductPrice({
  quantity,
  unitPrice,
}: IGenerateTotalProductPrice) {
  return String(Number(quantity) * Number(unitPrice));
}

export function generateTotalOrderPrice(
  ...totalProductPrices: Array<TotalPrice>
): TotalPrice {
  return String(
    totalProductPrices.reduce((previousValue, currentValue) => {
      return Number(previousValue) + Number(currentValue);
    }, 0)
  );
}
