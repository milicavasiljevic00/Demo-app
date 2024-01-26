import { CityWithId } from "./CityWithId";

export interface CurrentOrderInfo {
  city: CityWithId;
  zip: string;
  street: string;
  number: string;
}
