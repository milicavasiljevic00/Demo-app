import React from 'react'
import './OrderUserCard.scss'
import { OrderCardProps } from '../../orders-admin/orders-list-admin/order-card/OrderCardProps'
import { useModalContext } from '../../../../components/popup/modal-context/ModalContext';
import OrderDetailsForm from '../../orders-admin/orders-list-admin/order-card/order-details/OrderDetailsForm';
import { CurrencyEnum } from '../../../../models/currency-enum/CurrencyEnum';

const OrderUserCard: React.FC<OrderCardProps> = ({ order }) => {
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
                    <p>{order.orderProducts.length} PRODUCTS</p>
                </div>
            </div>
            <div className="product-option">
                <button className='product-option-btn only-edit' onClick={handleOpenDetails}>DETAILS</button>
            </div>
        </div>
    )
}

export default OrderUserCard
