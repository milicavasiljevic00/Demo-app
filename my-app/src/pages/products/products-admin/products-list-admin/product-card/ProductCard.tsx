import React, { useState } from 'react'
import { ProductCardProps } from './ProductCardProps'
import { CurrencyEnum } from '../../../../../models/currency-enum/CurrencyEnum'
import './ProductCard.scss'
import Modal from '../../../../../components/popup/Modal'
import EditForm from './product-options/EditForm'
import DeleteForm from './product-options/DeleteForm'

const ProductCard:  React.FC<ProductCardProps> = ({product, onEdit, onDelete}) => {

  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  function toggleEditModal() {
      setShowEditModal(!showEditModal);
  }

  function toggleDeleteModal() {
    setShowDeleteModal(!showDeleteModal);
  } 

  return (
    <>
    <div className="product-card">
      <div className="product-info">
        <h4 className="caption-txt">{product.name}</h4>
        <div className="price-section">
          <p>{product.price} {CurrencyEnum.RSD}</p>
          <p>{product.quantity}</p>
        </div>
      </div>
      <div className="product-options">
        <button className='product-option-btn edit' onClick={toggleEditModal}>EDIT</button>
        <button className='product-option-btn delete' onClick={toggleDeleteModal}>DELETE</button>
      </div>
    </div>

    <Modal open={showEditModal} onClose={toggleEditModal}>
      <EditForm product={product} onEdit={onEdit} onClose={toggleEditModal}/>
    </Modal>

    <Modal open={showDeleteModal} onClose={toggleDeleteModal}>
      <DeleteForm product={product} onClose={toggleDeleteModal} onDelete={onDelete}/>
    </Modal>
    </>
  )
}

export default ProductCard
