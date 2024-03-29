import { ProductWithQuantity } from "../models/entities/ProductWithQuantity";
import { UserContent } from "./UserContent";

export interface IUserContext {
  user: UserContent | null;
  logIn: (user: UserContent) => void;
  logOut: () => void;
}
