import { useContext, useEffect, useState } from "react";
import { ProductWithQuantity } from "../models/entities/ProductWithQuantity";
import { CartContext } from "./CartContext";

const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }: any) => {

    const [orderProducts, setOrderProducts] = useState<ProductWithQuantity[]>([]);

    function addProduct(product: ProductWithQuantity) {
        setOrderProducts([...orderProducts, product]);
    }

    function removeProduct(id: number) {
        const filteredProducts = orderProducts.filter((pr) => pr.product.id !== id);
        setOrderProducts(filteredProducts);
    }

    function removeAllProducts() {
        setOrderProducts([]);
    }

    function increaseQuantity(id: number) {
        const product = orderProducts.find((p) => p.product.id === id);
        if (product) {
            product.quantity = product.quantity + 1;
        }
    }

    function decreaseQuantity(id: number) {
        const product = orderProducts.find((p) => p.product.id === id);
        if (product) {
            product.quantity = product.quantity - 1;
        }
    }

    return (
        <CartContext.Provider value={{ orderProducts, addProduct, removeProduct, removeAllProducts, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
export { useCartContext, CartContextProvider }