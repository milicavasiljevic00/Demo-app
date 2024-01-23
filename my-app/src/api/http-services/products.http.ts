import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { ProductAdmin } from "../../models/entities/ProductAdmin";
import { deleteRequest, getRequest, postRequest, putRequest } from "../axios-client/axios-client";
import { AxiosResponse } from "axios";
import { CreateProduct } from "../../models/entities/CreateProduct";
import { ProductUser } from "../../models/entities/ProductUser";

export class ProductHttp extends AxiosAbstract<ProductAdmin> {
  constructor() {
    super("PRODUCTS");
  }

  getProductsAdmin(
    query?: string
  ): Promise<AxiosResponse<ProductAdmin[]>> {
    return getRequest(this.httpRoute + "/administrators");
  }

  getProductsUser(
    query?: string
  ): Promise<AxiosResponse<ProductUser[]>> {
    return getRequest(this.httpRoute);
  }

  editProduct(
    body?: ProductAdmin
  ): Promise<AxiosResponse<ProductAdmin>> {
    return putRequest(this.httpRoute, body);
  }

  deleteProduct(
    id: number
  ): Promise<AxiosResponse<void>> {
    return deleteRequest(`${this.httpRoute}/${id}`);
  }

  addProduct(
    body?: CreateProduct
  ): Promise<AxiosResponse<ProductAdmin>> {
    return postRequest(this.httpRoute, body);
  }
}