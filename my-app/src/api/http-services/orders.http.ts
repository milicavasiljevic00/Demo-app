import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Order } from "../../models/entities/Order";

export class OrderHttp extends AxiosAbstract<Order> {
  constructor() {
    super("ORDERS");
  }
}