import { ProductWithQuantity } from "../models/entities/ProductWithQuantity";

export interface ICartContext {
    orderProducts: ProductWithQuantity[];
    addProduct: (product: ProductWithQuantity) => void;
    removeProduct: (id: number) => void;
    removeAllProducts: () => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}