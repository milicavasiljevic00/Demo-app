import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Product } from "../../models/entities/Product";

export class ProductHttp extends AxiosAbstract<Product> {
  constructor() {
    super("PRODUCTS");
  }
}