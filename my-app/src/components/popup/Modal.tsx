import { ModalProps } from '@mui/material'
import React from 'react'
import './Modal.scss'

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClose) {
            onClose(event, 'backdropClick'); 
        }
    };

    const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget && onClose) {
            onClose(event, 'backdropClick'); 
        }
    };

  return (
    <div className={`${"modal"} ${open ? "display-block" : "display-none"}`} onClick={handleDivClick}>
        <div className="modal-main">
            <i className="fa-solid fa-x close-modal" onClick={handleClick}></i>
            <div className="modal-body">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal
