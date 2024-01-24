import React from 'react'
import { PopularOrdersListProps } from './PopularOrdersListProps'
import PopularOrderCard from './PopularOrderCard'
import './PopularOrdersList.scss'

const PopularOrdersList: React.FC<PopularOrdersListProps> = ({ popularOrders }) => {
    return (
        <div className="popular-orders-list">
            {popularOrders.map((order, index) => (
                <PopularOrderCard key={index} order={order} />
            ))}
        </div>
    )
}

export default PopularOrdersList
