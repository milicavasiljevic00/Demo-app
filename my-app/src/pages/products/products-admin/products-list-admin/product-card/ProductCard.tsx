import React, { useState } from 'react'
import { ProductCardProps } from './ProductCardProps'
import { CurrencyEnum } from '../../../../../models/currency-enum/CurrencyEnum'
import './ProductCard.scss'
import Modal from '../../../../../components/popup/Modal'
import EditForm from './product-options/EditForm'
import DeleteForm from './product-options/DeleteForm'
import { useModalContext } from '../../../../../components/popup/modal-context/ModalContext'

const ProductCard:  React.FC<ProductCardProps> = ({product, onEdit, onDelete}) => {

  const {open} = useModalContext();

  function handleOpenEdit(){
    open(<EditForm product={product} onEdit={onEdit}></EditForm>)
  }

  function handleOpenDelete(){
    open(<DeleteForm product={product} onDelete={onDelete}></DeleteForm>)
  }

  return (
    <div className="product-card">
      <div className="product-info">
        <h4 className="caption-txt">{product.name}</h4>
        <div className="price-section">
          <p>{product.price} {CurrencyEnum.RSD}</p>
          <p>{product.quantity}</p>
        </div>
      </div>
      <div className="product-options">
        <button className='product-option-btn edit' onClick={handleOpenEdit}>EDIT</button>
        <button className='product-option-btn delete' onClick={handleOpenDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default ProductCard
