import React from "react";
import { ProductsListUserProps } from "./ProductsListUserProps";
import ProductCardUser from "../product-card/ProductCardUser";
import "./ProductsListUser.scss";

const ProductsListUser: React.FC<ProductsListUserProps> = ({ products }) => {
  return (
    <div className="products-list-user">
      {products.map((product, index) => (
        <ProductCardUser key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsListUser;
