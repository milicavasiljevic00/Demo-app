import React, { useState } from 'react'
import { EditFormProps } from './EditFormProps'
import { Button, TextField } from '@mui/material';
import { ProductAdmin } from '../../../../../../models/entities/ProductAdmin';
import { ProductHttp } from '../../../../../../api/http-services/products.http';

const EditForm : React.FC<EditFormProps> = ({ product, onEdit, onClose }) => {

    const [productInfo, setProductInfo] = useState<ProductAdmin>(product);

    const productHttp = new ProductHttp()

    const handleChange = (partialData:Partial<ProductAdmin>) => {
        setProductInfo({...productInfo,...partialData});
    }
   
    const handleSubmit = async() => {
        console.log(productInfo);
        try{
            await productHttp.editProduct(productInfo);
            onEdit();
            onClose();
        }
        catch(error){
            console.log(error);
            alert("Error");
        }

    };

  return (
    <div style={{padding: '15px'}}>
      <TextField
        name="name"
        defaultValue={productInfo.name}
        onChange={(e) => handleChange({name:e.target.value})}
        fullWidth
        margin="normal"
      />
      <TextField
        name="price"
        type="number"
        defaultValue={productInfo.price}
        onChange={(e) => handleChange({price: parseInt(e.target.value, 10)})}
        fullWidth
        margin="normal"
      />
      <TextField
        name="quantity"
        type="number"
        defaultValue={productInfo.quantity}
        onChange={(e) => handleChange({quantity: parseInt(e.target.value, 10)})}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} style={{ backgroundColor: 'rgb(214, 129, 1)' , marginTop: '20px', marginBottom: '20px' }} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  )
};


export default EditForm
