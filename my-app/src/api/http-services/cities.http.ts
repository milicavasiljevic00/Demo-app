import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { City } from "../../models/entities/City";

export class CityHttp extends AxiosAbstract<City> {
  constructor() {
    super("CITIES");
  }
}