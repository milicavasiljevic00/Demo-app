import React from 'react'
import { OrdersListProps } from './OrdersListProps'
import OrderCard from '../order-card/OrderCard'
import './OrdersList.scss'

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
    return (
        <div className="orders-list">
            {orders.map((order, index) => (
                <OrderCard key={index} order={order} />
            ))}
        </div>
    )
}

export default OrdersList
