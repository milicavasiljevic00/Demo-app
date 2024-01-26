import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Order } from "../../models/entities/Order";
import { AxiosResponse } from "axios";
import { getRequest, postRequest } from "../axios-client/axios-client";
import { CurrentOrder } from "../../models/entities/CurrentOrder";
import { PopularOrder } from "../../models/entities/PopularOrder";

export class OrderHttp extends AxiosAbstract<Order> {
  constructor() {
    super("ORDERS");
  }

  getAllOrders(
    query?: string
  ): Promise<AxiosResponse<Order[]>> {
    return getRequest(this.httpRoute);
  }

  getMyOrders(
    query?: string
  ): Promise<AxiosResponse<Order[]>> {
    return getRequest(this.httpRoute + "/me");
  }

  getPopularOrders(
    query?: string
  ): Promise<AxiosResponse<PopularOrder[]>> {
    return getRequest(this.httpRoute + "/most-popular");
  }

  addOrder(
    body?: CurrentOrder
  ): Promise<AxiosResponse<CurrentOrder>> {
    return postRequest(this.httpRoute, body);
  }

}