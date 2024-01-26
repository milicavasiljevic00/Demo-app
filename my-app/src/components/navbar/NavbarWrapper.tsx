import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "../footer/Footer";

const NavbarWrapper: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavbarWrapper;
