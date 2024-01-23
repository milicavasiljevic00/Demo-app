import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { CurrentOrder } from '../../models/entities/CurrentOrder';
import { SubmitHandler, useForm } from 'react-hook-form';

const OrderInfoForm = () => {

    const [orderInfo, setOrderInfo] = useState<CurrentOrder>({
        orderProducts: [], orderDeliveryInfo: undefined
    });

    const { register, handleSubmit, formState: { errors } } = useForm<CurrentOrder>({ mode: 'onBlur' })

    const onSubmit: SubmitHandler<CurrentOrder> = async () => {
        try {

        }
        catch (error) {
            console.log(error);
            alert("Error");
        }
    }

    const handleDataChange = (partialData: Partial<CurrentOrder>) => {
        setOrderInfo({ ...orderInfo, ...partialData });
    }


    return (
        <div>
            <Box style={{ padding: '20px' }}>
                <TextField fullWidth
                    label="Enter Zip"
                    placeholder="Zip"
                    {
                    ...register("orderDeliveryInfo.zip", {
                        required: "Zip is required"

                    })
                    }
                    value={orderInfo.orderDeliveryInfo?.zip}
                    onChange={(e) => handleDataChange({ orderDeliveryInfo.zip: e.target.value })}
                />
                {
                    errors.orderDeliveryInfo?.zip && (
                        <p className='error-msg'>{errors.orderDeliveryInfo.zip.message}</p>
                    )
                }
                <TextField fullWidth
                    label="Enter Street"
                    type="string"
                    placeholder='Street'
                    {
                    ...register("orderDeliveryInfo.street", {
                        required: "Street is required",
                    })
                    }
                    value={orderInfo.orderDeliveryInfo?.street}
                    onChange={(e) => handleDataChange({ price: parseInt(e.target.value) })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.orderDeliveryInfo?.street && (
                        <p className='error-msg'>{errors.orderDeliveryInfo.street.message}</p>
                    )
                }
                <TextField fullWidth
                    label="Enter Number"
                    type="string"
                    placeholder='Number'
                    {
                    ...register("orderDeliveryInfo.number", {
                        required: "Number is required",
                    })
                    }
                    value={orderInfo.orderDeliveryInfo?.number}
                    onChange={(e) => handleDataChange({ price: parseInt(e.target.value) })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.orderDeliveryInfo?.number && (
                        <p className='error-msg'>{errors.orderDeliveryInfo.number.message}</p>
                    )
                }
                <Button onClick={handleSubmit(onSubmit)} style={{ backgroundColor: 'rgb(214, 129, 1)', marginTop: '20px' }} fullWidth variant="contained">Order</Button>

            </Box>

        </div>
    )
}

export default OrderInfoForm
