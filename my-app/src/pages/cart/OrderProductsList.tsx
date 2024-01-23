import React from 'react'
import './OrderProductsList';
import { useUserContext } from '../../context/UserContextProvider';
import OrderProductCard from './OrderProductCard';
import './OrderProductCard.scss'

const OrderProductsList = () => {

    const { orderProducts } = useUserContext();

    return (
        <div className="order-products-list">
            {orderProducts.map((product, index) => (
                <OrderProductCard key={index} orderProduct={product} />
            ))}
        </div>
    )
}

export default OrderProductsList;
