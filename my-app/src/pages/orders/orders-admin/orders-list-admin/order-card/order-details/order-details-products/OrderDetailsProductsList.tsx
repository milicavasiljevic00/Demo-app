import React from "react";
import { OrderDetailsProductsListProps } from "./OrderDetailsProductsListProps";
import OrderDetailsProductCard from "./OrderDetailsProductCard";

const OrderDetailsProductsList: React.FC<OrderDetailsProductsListProps> = ({
  products,
}) => {
  return (
    <div className="">
      {products.map((product, index) => (
        <OrderDetailsProductCard key={index} orderProduct={product} />
      ))}
    </div>
  );
};

export default OrderDetailsProductsList;
