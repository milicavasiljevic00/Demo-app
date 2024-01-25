import React from "react";
import { OrdersListProps } from "./OrdersListProps";
import OrderCard from "../order-card/OrderCard";
import "./OrdersList.scss";
import { useUserContext } from "../../../../../user-context/UserContextProvider";
import OrderUserCard from "../../../orders-user/order-card/OrderUserCard";

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  const { user } = useUserContext();

  return (
    <div className="orders-list">
      {user?.role !== "USER"
        ? orders.map((order, index) => <OrderCard key={index} order={order} />)
        : orders.map((order, index) => (
            <OrderUserCard key={index} order={order} />
          ))}
    </div>
  );
};

export default OrdersList;
