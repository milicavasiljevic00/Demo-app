import React, { useEffect, useState } from "react";
import "./Home.scss";
import { OrderHttp } from "../../api/http-services/orders.http";
import { Order } from "../../models/entities/Order";
import PopularOrdersList from "./most-popular-orders/PopularOrdersList";
import { PopularOrder } from "../../models/entities/PopularOrder";

const Home = () => {
  const [orders, setOrders] = useState<PopularOrder[]>([]);

  const orderHttp = new OrderHttp();

  const fetchPopularOrders = async () => {
    try {
      const response = await orderHttp.getPopularOrders();
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchPopularOrders();
  }, []);

  return (
    <div className="home">
      <img className="home-img" src="../../assets/shopee1.jpg"></img>
      <div>
        <div className="popular-container">
          <div className="popular-orders-container">
            <h1 className="home-caption">Most popular</h1>
            <div className="popular-list">
              <PopularOrdersList popularOrders={orders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
