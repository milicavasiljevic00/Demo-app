import React, { useEffect, useState } from 'react'
import { OrderProductCardProps } from './OrderProductCardProps'
import { CurrencyEnum } from '../../models/currency-enum/CurrencyEnum'
import { useUserContext } from '../../context/UserContextProvider'

const OrderProductCard: React.FC<OrderProductCardProps> = ({ orderProduct }) => {

    const { increaseQuantity, decreaseQuantity, removeProduct } = useUserContext();

    const [quantity, setQuantity] = useState<number>(orderProduct.quantity);

    const handleIncrease = () => {
        increaseQuantity(orderProduct.product.id);
        setQuantity(quantity + 1);
    }

    const handleDecrease = () => {
        decreaseQuantity(orderProduct.product.id);
        setQuantity(quantity - 1);
    }

    const handleRemove = () => {
        removeProduct(orderProduct.product.id);
    }

    return (
        <div className='order-product-card-container'>
            <div className='order-product-name'>
                <p>{orderProduct.product.name}</p>
                <p className='price-and-quantity'>{orderProduct.product.price} {CurrencyEnum.RSD}</p>
                <p className='price-and-quantity'>{quantity}</p>
            </div>
            <div className='plus-minus-buttons'>
                <button className='plus-btn' onClick={handleIncrease}>+</button>
                <button className='plus-btn' onClick={handleDecrease}>-</button>
            </div>
            <div className='remove-button'>
                <i className="fa-solid fa-x remove-product-icon" onClick={handleRemove}></i>
            </div>
        </div>
    )
}

export default OrderProductCard
