import './App.scss';
import {Button} from "@mui/material";
import Loginform from './pages/login/LoginForm';
import { Outlet } from 'react-router';

function App() {
  return (
    <Outlet />
  );
}

export default App;
