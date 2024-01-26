import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrdersList from "./orders-list-admin/orders-list/OrdersList";
import { Order } from "../../../models/entities/Order";
import { OrderHttp } from "../../../api/http-services/orders.http";
import "./OrdersAdmin.scss";

const OrdersAdmin = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const orderHttp = new OrderHttp();

  const fetchOrders = async () => {
    try {
      const response = await orderHttp.getAllOrders();
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="page-container">
      <div className="orders-container">
        <h1 className="caption">All orders</h1>
        <OrdersList orders={orders} />
      </div>
    </div>
  );
};

export default OrdersAdmin;
