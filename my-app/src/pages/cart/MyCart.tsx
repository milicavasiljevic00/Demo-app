import React, { useEffect, useState } from "react";
import "./MyCart.scss";
import { Box, Container } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { useUserContext } from "../../user-context/UserContextProvider";
import OrderProductsList from "./OrderProductsList";
import { CurrencyEnum } from "../../models/currency-enum/CurrencyEnum";
import { useModalContext } from "../../components/popup/modal-context/ModalContext";
import OrderInfoForm from "./OrderInfoForm";
import { useCartContext } from "../../cart-context/CartContextProvider";

const MyCart = () => {
  const { orderProducts } = useCartContext();
  const { open } = useModalContext();

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const sum = orderProducts.reduce(
      (sum, current) => sum + current.product.price,
      0
    );
    setTotal(sum);
  }, [orderProducts]);

  const handleOrder = () => {
    open(<OrderInfoForm></OrderInfoForm>);
  };

  return (
    <div className="bg-login-color">
      <Container fixed>
        <div className="div-wrapper">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <div className="wrapper-content">
                <Box
                  component="span"
                  sx={{ p: 2, color: "#1d395d", textAlign: "left" }}
                >
                  <h1>My order</h1>
                </Box>
                <OrderProductsList />
                <div className="total-price">
                  <label>Total:</label>
                  <p>
                    {total} {CurrencyEnum.RSD}
                  </p>
                  <Button
                    onClick={handleOrder}
                    style={{
                      backgroundColor: "rgb(214, 129, 1)",
                      width: "100px",
                    }}
                    variant="contained"
                  >
                    Order
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default MyCart;
