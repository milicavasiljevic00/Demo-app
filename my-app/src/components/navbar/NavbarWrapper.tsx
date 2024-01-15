import { Outlet } from "react-router";
import Navbar from "./Navbar";
import "./Navbar.scss"

const NavbarWrapper: React.FC = () => {
    return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    )
};

export default NavbarWrapper;