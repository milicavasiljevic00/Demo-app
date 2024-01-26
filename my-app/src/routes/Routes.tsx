import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginForm from "../pages/login/LoginForm";
import NavbarWrapper from "../components/navbar/NavbarWrapper";
import RegisterForm from "../pages/register/RegisterForm";
import ProductsAdmin from "../pages/products/products-admin/ProductsAdmin";
import { Protected } from "./Protected";
import OrdersAdmin from "../pages/orders/orders-admin/OrdersAdmin";
import { UserRoles } from "./UserRoles";
import Home from "../pages/home/Home";
import AdminUsers from "../pages/admin-users/AdminUsers";
import ProductsUser from "../pages/products/products-user/ProductsUser";
import MyCart from "../pages/cart/MyCart";
import OrdersUser from "../pages/orders/orders-user/OrdersUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "home", element: <Home /> },
      {
        path: "products-admin",
        element: (
          <Protected
            role={[UserRoles.ADMINISTRATOR, UserRoles.WAREHOUSE_ADMINISTRATOR]}
            content={<ProductsAdmin />}
          />
        ),
      },
      {
        path: "orders",
        element: (
          <Protected
            role={[UserRoles.ADMINISTRATOR, UserRoles.WAREHOUSE_ADMINISTRATOR]}
            content={<OrdersAdmin />}
          />
        ),
      },
      {
        path: "users-admin",
        element: (
          <Protected
            role={[UserRoles.ADMINISTRATOR]}
            content={<AdminUsers />}
          />
        ),
      },
      {
        path: "products-user",
        element: (
          <Protected role={[UserRoles.USER]} content={<ProductsUser />} />
        ),
      },
      {
        path: "my-cart",
        element: <Protected role={[UserRoles.USER]} content={<MyCart />} />,
      },
      {
        path: "my-orders",
        element: <Protected role={[UserRoles.USER]} content={<OrdersUser />} />,
      },
    ],
  },
]);
