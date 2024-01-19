import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginForm from "../pages/login/LoginForm";
import NavbarWrapper from "../components/navbar/NavbarWrapper";
import RegisterForm from "../pages/register/RegisterForm";
import ProductsAdmin from "../pages/products/products-admin/ProductsAdmin";
import { Protected } from "./Protected";
import OrdersAdmin from "../pages/orders/orders-admin/OrdersAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/", element: <App />
      },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "products-admin", element: <Protected role="ADMINISTRATOR WAREHOUSE_ADMINISTRATOR" content={<ProductsAdmin />} /> },
      { path: "orders", element: <Protected role="ADMINISTRATOR WAREHOUSE_ADMINISTRATOR" content={<OrdersAdmin />} /> },
    ],
  },
]);

