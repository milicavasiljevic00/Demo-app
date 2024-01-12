import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginForm from "../pages/login/LoginForm";
import Registerform from "../pages/register/RegisterForm";
import RegisterForm from "../pages/register/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
    ],
  },
]);