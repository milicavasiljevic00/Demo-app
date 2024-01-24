import React, { useEffect, useState } from 'react'
import './OrdersUser.scss'
import OrdersList from '../orders-admin/orders-list-admin/orders-list/OrdersList'
import { OrderHttp } from '../../../api/http-services/orders.http';
import { Order } from '../../../models/entities/Order';

const OrdersUser = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    const orderHttp = new OrderHttp()

    const fetchOrders = async () => {
        try {
            const response = await orderHttp.getMyOrders();
            setOrders(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="page-container">
            <div className="orders-container">
                <h1 className="caption">My orders</h1>
                <OrdersList orders={orders} />
            </div>
        </div>
    )
}

export default OrdersUser
