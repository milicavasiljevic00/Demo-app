import React from "react";
import { ProductsListProps } from "./ProductsListProps";
import ProductCard from "../product-card/ProductCard";
import "./ProductsList.scss";

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="products-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductsList;
