import { OrderDeliveryInfo } from "./OrderDeliveryInfo";
import { ProductInOrder } from "./ProductInOrder";
import { UserOrderInfo } from "./UserOrderInfo";

export interface Order {
  id: number;
  date: number;
  total: number;
  orderProducts: ProductInOrder[];
  user: UserOrderInfo;
  orderDeliveryInfo: OrderDeliveryInfo;
}
