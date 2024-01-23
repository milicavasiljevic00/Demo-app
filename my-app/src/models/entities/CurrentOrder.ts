import { CurrentOrderInfo } from "./CurrentOrderInfo";
import { ProductInCurrentOrder } from "./ProductInCurrentOrder";

export interface CurrentOrder {
    orderProducts?: ProductInCurrentOrder[];
    orderDeliveryInfo?: CurrentOrderInfo;
}