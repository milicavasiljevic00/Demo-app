import { UserOrderInfo } from "./UserOrderInfo";

export interface ProductInOrder {
  name: string;
  price: number;
  orderQuantity: number;
  user: UserOrderInfo;
}
