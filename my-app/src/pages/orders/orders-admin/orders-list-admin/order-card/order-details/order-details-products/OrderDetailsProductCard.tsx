import React from "react";
import { OrderDetailsProductCardProps } from "./OrderDetailsProductCardProps";
import { CurrencyEnum } from "../../../../../../../models/currency-enum/CurrencyEnum";
import "./OrderDetailsProductCard.scss";

const OrderDetailsProductCard: React.FC<OrderDetailsProductCardProps> = ({
  orderProduct,
}) => {
  return (
    <div className="product-details-card-container">
      <div className="product-details-name">
        <p>{orderProduct.name}</p>
        <p className="details-price-and-quantity">
          {orderProduct.price} {CurrencyEnum.RSD}
        </p>
        <p className="details-price-and-quantity">
          {orderProduct.orderQuantity}
        </p>
      </div>
    </div>
  );
};

export default OrderDetailsProductCard;
