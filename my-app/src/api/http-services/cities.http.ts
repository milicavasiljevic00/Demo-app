import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { City } from "../../models/entities/City";
import { AxiosResponse } from "axios";
import { getRequest } from "../axios-client/axios-client";

export class CityHttp extends AxiosAbstract<City> {
  constructor() {
    super("CITIES");
  }

  getCities(
    query?: string
  ): Promise<AxiosResponse<City[]>> {
    return getRequest(this.httpRoute);
  }
}