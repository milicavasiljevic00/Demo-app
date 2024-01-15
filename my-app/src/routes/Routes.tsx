import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginForm from "../pages/login/LoginForm";
import NavbarWrapper from "../components/navbar/NavbarWrapper";
import RegisterForm from "../pages/register/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/", element: <App/>
      },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
    ],
  },
]);

