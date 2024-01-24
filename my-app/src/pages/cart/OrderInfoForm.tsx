import { Button, MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { CurrentOrder } from '../../models/entities/CurrentOrder';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CurrentOrderInfo } from '../../models/entities/CurrentOrderInfo';
import { City } from '../../models/entities/City';
import { CityHttp } from '../../api/http-services/cities.http';
import { useUserContext } from '../../context/UserContextProvider';
import { ProductInCurrentOrder } from '../../models/entities/ProductInCurrentOrder';
import { OrderHttp } from '../../api/http-services/orders.http';
import { useModalContext } from '../../components/popup/modal-context/ModalContext';

const OrderInfoForm = () => {

    const cityHttp = new CityHttp();
    const orderHttp = new OrderHttp();

    const [orderInfo, setOrderInfo] = useState<CurrentOrderInfo>({
        city: { id: '' }, zip: '', street: '', number: ''
    });
    const [cities, setCities] = useState<City[]>([]);
    const { orderProducts, removeAllProducts } = useUserContext();
    const { close } = useModalContext();

    const { register, handleSubmit, formState: { errors } } = useForm<CurrentOrderInfo>({ mode: 'onBlur' })

    const onSubmit: SubmitHandler<CurrentOrderInfo> = async () => {
        try {
            const currentOrder = createCurrentOrder();
            const response = await orderHttp.addOrder(currentOrder);
            const responseData = response.data;
            close();
            setOrderInfo({
                city: { id: '' }, zip: '', street: '', number: ''
            });
            removeAllProducts();
            alert("Order added.");
        }
        catch (error) {
            console.log(error);
            alert("Error");
        }
    }

    const createCurrentOrder = () => {
        const orderProductsArray: ProductInCurrentOrder[] = orderProducts.map(
            (productWithQuantity) => ({
                product: { id: String(productWithQuantity.product.id) },
                quantity: productWithQuantity.quantity,
            })
        );

        const currentOrder: CurrentOrder = {
            orderProducts: orderProductsArray,
            orderDeliveryInfo: orderInfo,
        };

        return currentOrder;
    }

    const fetchCities = async () => {
        try {
            const response = await cityHttp.getCities();
            setCities(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    useEffect(() => {
        fetchCities();
    }, [])

    const handleDataChange = (partialData: Partial<CurrentOrderInfo>) => {
        setOrderInfo({ ...orderInfo, ...partialData });
    }

    return (
        <div>
            <Box style={{ padding: '20px' }}>
                <Box component="span" sx={{ p: 2, color: '#1d395d', textAlign: 'left' }}>
                    <h1>Enter order info</h1>
                </Box>
                <TextField
                    fullWidth
                    label="City"
                    select
                    value={orderInfo.city.id}
                    onChange={(e) => handleDataChange({ city: { id: String(e.target.value) } })}
                    style={{ marginBottom: '20px', marginLeft: '-16px' }}
                >
                    <MenuItem value="" disabled>Select a city</MenuItem>
                    {cities.map((city) => (
                        <MenuItem key={city.id} value={city.id}>
                            {city.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField fullWidth
                    label="Enter Zip"
                    placeholder="Zip"
                    {
                    ...register("zip", {
                        required: "Zip is required"

                    })
                    }
                    value={orderInfo.zip}
                    onChange={(e) => handleDataChange({ zip: e.target.value })}
                />
                {
                    errors.zip && (
                        <p className='error-msg'>{errors.zip.message}</p>
                    )
                }
                <TextField fullWidth
                    label="Enter Street"
                    type="string"
                    placeholder='Street'
                    {
                    ...register("street", {
                        required: "Street is required",
                    })
                    }
                    value={orderInfo.street}
                    onChange={(e) => handleDataChange({ street: e.target.value })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.street && (
                        <p className='error-msg'>{errors.street.message}</p>
                    )
                }
                <TextField fullWidth
                    label="Enter Number"
                    type="string"
                    placeholder='Number'
                    {
                    ...register("number", {
                        required: "Number is required",
                    })
                    }
                    value={orderInfo.number}
                    onChange={(e) => handleDataChange({ number: e.target.value })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.number && (
                        <p className='error-msg'>{errors.number.message}</p>
                    )
                }
                <Button onClick={handleSubmit(onSubmit)} style={{ backgroundColor: 'rgb(214, 129, 1)', marginTop: '30px' }} fullWidth variant="contained">Order</Button>

            </Box>

        </div>
    )
}

export default OrderInfoForm
