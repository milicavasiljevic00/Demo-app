import React from 'react'
import { OrderCardProps } from './OrderCardProps'
import './OrderCard.scss'
import { CurrencyEnum } from '../../../../../models/currency-enum/CurrencyEnum'
import { useModalContext } from '../../../../../components/popup/modal-context/ModalContext'
import OrderDetailsForm from './order-details/OrderDetailsForm'

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {

    const { open } = useModalContext();

    const handleOpenDetails = () => {
        open(<OrderDetailsForm order={order}></OrderDetailsForm>)
    }

    return (
        <div className="product-card">
            <div className="product-info">
                <h4 className="caption-txt">Date: {order.date}</h4>
                <div className="price-section">
                    <p>Total: {order.total} {CurrencyEnum.RSD}</p>
                    <p>{order.user.firstName} {order.user.lastName}</p>
                </div>
            </div>
            <div className="product-option">
                <button className='product-option-btn only-edit' onClick={handleOpenDetails}>DETAILS</button>
            </div>
        </div>
    )
}

export default OrderCard
