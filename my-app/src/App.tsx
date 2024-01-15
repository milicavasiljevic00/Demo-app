import './App.scss';
import {Button} from "@mui/material";
import Loginform from './pages/login/LoginForm';
import { Outlet, RouterProvider } from 'react-router';
import Navbar from './components/navbar/Navbar';
import { router } from './routes/Routes';

function App() {
  return (
      <Outlet/>
  );
}

export default App;
