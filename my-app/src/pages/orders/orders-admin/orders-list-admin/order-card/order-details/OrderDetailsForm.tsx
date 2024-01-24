import React from 'react'
import { OrderDetailsFormProps } from './OrderDetailsFormProps'
import { Box, Container, Grid, TextField } from '@mui/material';
import OrderDetailsProductsList from './order-details-products/OrderDetailsProductsList';
import './OrderDetailsForm.scss'

const OrderDetailsForm: React.FC<OrderDetailsFormProps> = ({ order }) => {
    return (
        <div className='order-details-container'>
            <div className='products-content'>
                <h2 className='details-section-caption'>Products</h2>
                <OrderDetailsProductsList products={order.orderProducts} />
            </div>
            <div className='user-info-content'>
                <h2 className='details-section-caption'>User info</h2>
                <div className='info-paragraphs'>
                    <p>Username: {order.user.username}</p>
                    <p>E-mail: {order.user.userContactInfo.email}</p>
                    <p>Phone: {order.user.userContactInfo.contactPhone}</p>
                </div>
            </div>
            <div className='delivery-info-content'>
                <h2 className='details-section-caption'>Delivery info</h2>
                <div className='info-paragraphs'>
                    <p>City: {order.orderDeliveryInfo.city}</p>
                    <p>Zip: {order.orderDeliveryInfo.zip}</p>
                    <p>Address: {order.orderDeliveryInfo.street} {order.orderDeliveryInfo.number}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsForm;
