import { Outlet } from "react-router";
import Navbar from "./Navbar";

const NavbarWrapper: React.FC = () => {
    return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    )
};

export default NavbarWrapper;