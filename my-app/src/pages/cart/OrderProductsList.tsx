import React from "react";
import "./OrderProductsList";
import OrderProductCard from "./OrderProductCard";
import "./OrderProductCard.scss";
import { useCartContext } from "../../cart-context/CartContextProvider";

const OrderProductsList = () => {
  const { orderProducts } = useCartContext();

  return (
    <div className="order-products-list">
      {orderProducts.map((product, index) => (
        <OrderProductCard key={index} orderProduct={product} />
      ))}
    </div>
  );
};

export default OrderProductsList;
