import React from 'react'
import { PopularOrderCardProps } from './PopularOrderCardProps'
import './PopularOrderCard.scss'
import { CurrencyEnum } from '../../../models/currency-enum/CurrencyEnum'

const PopularOrderCard: React.FC<PopularOrderCardProps> = ({ order }) => {
    return (
        <div className='popular-order-card'>
            <p className='popular-product-name'>{order.name}</p>
            <p className='popular-product-price'>{order.price} {CurrencyEnum.RSD}</p>
        </div>
    )
}

export default PopularOrderCard
