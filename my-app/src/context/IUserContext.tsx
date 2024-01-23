import { ProductWithQuantity } from "../models/entities/ProductWithQuantity";
import { UserContent } from "./UserContent";

export interface IUserContext {
    user: UserContent | null;
    logIn: (user: UserContent) => void;
    logOut: () => void;
    orderProducts: ProductWithQuantity[];
    addProduct: (product: ProductWithQuantity) => void;
    removeProduct: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}