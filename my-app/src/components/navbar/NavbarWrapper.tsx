import { Outlet } from "react-router";
import Navbar from "./Navbar";
import "./Navbar.scss"

const NavbarWrapper: React.FC = () => {
    return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
    )
};

export default NavbarWrapper;