import React, { useState } from 'react'
import { EditFormProps } from './EditFormProps'
import { Box, Button, TextField } from '@mui/material';
import { ProductAdmin } from '../../../../../../models/entities/ProductAdmin';
import { ProductHttp } from '../../../../../../api/http-services/products.http';
import { AddFormProps } from './AddFormProps';
import { CreateProduct } from '../../../../../../models/entities/CreateProduct';
import { SubmitHandler, useForm } from 'react-hook-form';


const AddForm : React.FC<AddFormProps> = ({ onAdd, onClose }) => {

    const [productInfo, setProductInfo] = useState<CreateProduct>({
        name: '',
        price: 0,
        quantity: 0});

    const { register, handleSubmit, formState: { errors }} = useForm<CreateProduct>({mode: 'onBlur'})

    const productHttp = new ProductHttp();

    const onSubmit: SubmitHandler<CreateProduct> = async () => {
        try{
            await productHttp.addProduct(productInfo);
            onClose();
            setProductInfo({
                name: '',
                price: 0,
                quantity: 0})
        }
        catch(error){
            console.log(error);
            alert("Error");
        }
    }

    const handleDataChange = (partialData:Partial<CreateProduct>) => {
        setProductInfo({...productInfo,...partialData});
    }
   
  return (
    <div>
        <Box style={{padding:'20px'}}>
            <TextField fullWidth
                label="Enter Name"
                placeholder="Name"
                {
                ...register("name", {
                    required: "Name of product is required"

                })
                }
                value={productInfo.name}  
                onChange={(e) => handleDataChange({ name: e.target.value })}
            />
            {
                errors.name && (
                    <p className='error-msg'>{errors.name.message}</p>
                )
            }
            <TextField fullWidth
                label="Enter Price"
                type="number"
                placeholder='Price'
                {
                ...register("price", {
                    required: "Price is required",
                })
                }
                value={productInfo.price}  
                onChange={(e) => handleDataChange({ price: parseInt(e.target.value) })}
                style={{ marginTop: '20px' }} />
            {
                errors.price && (
                    <p className='error-msg'>{errors.price.message}</p>
                )
            }
            <TextField fullWidth
                label="Enter Quantity"
                type="number"
                placeholder='Quantity'
                {
                ...register("quantity", {
                    required: "Quantity is required",
                })
                }
                value={productInfo.quantity}  
                onChange={(e) => handleDataChange({ quantity: parseInt(e.target.value) })}
                style={{ marginTop: '20px' }} />
            {
                errors.quantity && (
                    <p className='error-msg'>{errors.quantity.message}</p>
                )
            }
            <Button onClick={handleSubmit(onSubmit)} style={{ backgroundColor: 'rgb(214, 129, 1)' , marginTop: '20px' }} fullWidth variant="contained">Submit</Button>

        </Box>

    </div>
  )
};


export default AddForm