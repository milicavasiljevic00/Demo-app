import React from 'react'
import { DeleteFormProps } from './DeleteFormProps'
import { ProductHttp } from '../../../../../../api/http-services/products.http'
import { Button } from '@mui/material'

const DeleteForm: React.FC<DeleteFormProps> = ({ product, onClose, onDelete }) => {

    const productHttp = new ProductHttp()

    const deleteProduct = async() => {
        try{
            await productHttp.deleteProduct(product.id);
            onDelete(product.id);
            onClose();
        }
        catch(error){
            console.log(error);
            alert("Error");
        }
    }

  return (
    <div>
        <p>Are you sure you want to delete {product.name}?</p>
        <Button onClick={deleteProduct} style={{ backgroundColor: 'rgb(214, 129, 1)' , marginTop: '20px', marginBottom: '20px', marginRight:'5px' }} variant="contained" color="primary">
            Yes
        </Button>
        <Button onClick={onClose} style={{ backgroundColor: 'rgb(214, 129, 1)' , marginTop: '20px', marginBottom: '20px' , marginLeft:'5px'}} variant="contained" color="primary">
            No
        </Button>
    </div>
  );
}

export default DeleteForm
