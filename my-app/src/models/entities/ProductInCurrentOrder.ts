import { ProductWithId } from "./ProductWithId";

export interface ProductInCurrentOrder {
    product: ProductWithId;
    quantity: number;
}