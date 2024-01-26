import React from "react";
import { ProductCardUserProps } from "./ProductCardUserProps";
import { CurrencyEnum } from "../../../../../models/currency-enum/CurrencyEnum";
import { useCartContext } from "../../../../../cart-context/CartContextProvider";

const ProductCardUser: React.FC<ProductCardUserProps> = ({ product }) => {
  const { orderProducts, addProduct, increaseQuantity } = useCartContext();

  const handleAdd = () => {
    const searchedProducts = orderProducts.find(
      (p) => p.product.id === product.id
    );
    if (searchedProducts) {
      increaseQuantity(product.id);
    } else {
      addProduct({ product: product, quantity: 1 });
    }
  };

  return (
    <div className="product-card">
      <div className="product-info">
        <h4 className="caption-txt">{product.name}</h4>
        <div className="price-section">
          <p>
            {product.price} {CurrencyEnum.RSD}
          </p>
        </div>
      </div>
      <div className="product-option">
        <button className="product-option-btn only-edit" onClick={handleAdd}>
          ADD TO ORDER
        </button>
      </div>
    </div>
  );
};

export default ProductCardUser;
