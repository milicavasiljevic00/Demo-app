import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Order } from "../../models/entities/Order";
import { AxiosResponse } from "axios";
import { getRequest } from "../axios-client/axios-client";

export class OrderHttp extends AxiosAbstract<Order> {
  constructor() {
    super("ORDERS");
  }

  getAllOrders(
    query?: string
  ): Promise<AxiosResponse<Order[]>> {
    return getRequest(this.httpRoute);
  }

  getPopularOrders(
    query?: string
  ): Promise<AxiosResponse<Order[]>> {
    return getRequest(this.httpRoute + "/most-popular");
  }
}