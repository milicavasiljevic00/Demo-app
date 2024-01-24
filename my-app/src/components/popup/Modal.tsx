import React from 'react'
import './Modal.scss'
import { ModalProps } from './ModalProps'
import { useModalContext } from './modal-context/ModalContext'

const Modal: React.FC<ModalProps> = ({ children }) => {

  const { close } = useModalContext();

  return (
    <div className="modal display-block" >
      <div className="modal-main">
        <i className="fa-solid fa-x close-modal" onClick={close}></i>
        {children}
      </div>
    </div>
  )
}

export default Modal
