import { Button, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { CurrentOrder } from "../../models/entities/CurrentOrder";
import { SubmitHandler, useForm } from "react-hook-form";
import { CurrentOrderInfo } from "../../models/entities/CurrentOrderInfo";
import { City } from "../../models/entities/City";
import { CityHttp } from "../../api/http-services/cities.http";
import { useUserContext } from "../../user-context/UserContextProvider";
import { ProductInCurrentOrder } from "../../models/entities/ProductInCurrentOrder";
import { OrderHttp } from "../../api/http-services/orders.http";
import { useModalContext } from "../../components/popup/modal-context/ModalContext";
import { useCartContext } from "../../cart-context/CartContextProvider";

const OrderInfoForm = () => {
  const cityHttp = new CityHttp();
  const orderHttp = new OrderHttp();

  const [orderInfo, setOrderInfo] = useState<CurrentOrderInfo>({
    city: { id: "" },
    zip: "",
    street: "",
    number: "",
  });
  const [cities, setCities] = useState<City[]>([]);
  const { orderProducts, removeAllProducts } = useCartContext();
  const { close } = useModalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CurrentOrderInfo>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<CurrentOrderInfo> = async () => {
    if (orderProducts.length === 0) {
      alert("There are no products in the cart.");
      close();
      setOrderInfo({
        city: { id: "" },
        zip: "",
        street: "",
        number: "",
      });
      return;
    }

    try {
      const currentOrder = createCurrentOrder();
      const response = await orderHttp.addOrder(currentOrder);
      close();
      setOrderInfo({
        city: { id: "" },
        zip: "",
        street: "",
        number: "",
      });
      removeAllProducts();
      alert("Order added.");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

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
  };

  const fetchCities = async () => {
    try {
      const response = await cityHttp.getCities();
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleDataChange = (partialData: Partial<CurrentOrderInfo>) => {
    setOrderInfo({ ...orderInfo, ...partialData });
  };

  return (
    <div>
      <Box style={{ padding: "20px" }}>
        <Box
          component="span"
          sx={{ p: 2, color: "#1d395d", textAlign: "left" }}
        >
          <h1>Enter order info</h1>
        </Box>

        <select
          className="edit-select-field"
          value={orderInfo.city.id}
          onChange={(e) =>
            handleDataChange({ city: { id: String(e.target.value) } })
          }
          style={{
            marginBottom: "20px",
            marginLeft: "-16px",
            color: orderInfo.city.id ? "black" : "gray",
          }}
        >
          <option value="" disabled className="select-label">
            Select a city
          </option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>

        <TextField
          fullWidth
          label="Enter Zip"
          placeholder="Zip"
          {...register("zip", {
            required: "Zip is required",
          })}
          value={orderInfo.zip}
          onChange={(e) => handleDataChange({ zip: e.target.value })}
        />
        {errors.zip && <p className="error-msg">{errors.zip.message}</p>}
        <TextField
          fullWidth
          label="Enter Street"
          type="string"
          placeholder="Street"
          {...register("street", {
            required: "Street is required",
          })}
          value={orderInfo.street}
          onChange={(e) => handleDataChange({ street: e.target.value })}
          style={{ marginTop: "20px" }}
        />
        {errors.street && <p className="error-msg">{errors.street.message}</p>}
        <TextField
          fullWidth
          label="Enter Number"
          type="string"
          placeholder="Number"
          {...register("number", {
            required: "Number is required",
          })}
          value={orderInfo.number}
          onChange={(e) => handleDataChange({ number: e.target.value })}
          style={{ marginTop: "20px" }}
        />
        {errors.number && <p className="error-msg">{errors.number.message}</p>}

        <Button
          onClick={handleSubmit(onSubmit)}
          style={{ backgroundColor: "rgb(214, 129, 1)", marginTop: "30px" }}
          fullWidth
          variant="contained"
        >
          Order
        </Button>
      </Box>
    </div>
  );
};

export default OrderInfoForm;
