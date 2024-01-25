import { createContext } from "react"
import { ICartContext } from "./ICartContext";

export const CartContext = createContext<ICartContext>({ orderProducts: [], addProduct: () => { }, removeProduct: () => { }, removeAllProducts: () => { }, increaseQuantity: () => { }, decreaseQuantity: () => { } });