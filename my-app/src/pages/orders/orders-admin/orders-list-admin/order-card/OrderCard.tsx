import React from 'react'
import { OrderCardProps } from './OrderCardProps'
import './OrderCard.scss'

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    return (
        <div className="order-card">
            <div>{order.date}</div>
            <div>{order.total}</div>
        </div>
    )
}

export default OrderCard
