import { HttpRoutes, HttpRoutesImpl } from "../enum/HttpRoutes";
import { AxiosResponse } from "axios";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../axios-client/axios-client";

export class AxiosAbstract<T extends {id:string}> {
  private readonly _httpRoute;

  constructor(private httpRouteC: keyof HttpRoutes) {
    this._httpRoute = HttpRoutesImpl[httpRouteC];
  }

  get(params?: any): Promise<AxiosResponse<T[]>> {
    return getRequest(this._httpRoute, params);
  }

  post(body: Omit<T,'id'>, params?: any): Promise<AxiosResponse<T>> {
    return postRequest(this._httpRoute, body, params);
  }

  put(body: T): Promise<AxiosResponse<T>> {
    return putRequest(this._httpRoute, body);
  }

  delete(id: number) {
    return deleteRequest(this._httpRoute + "/" + id);
  }

  get httpRoute() {
    return this._httpRoute;
  }
}
