import React from "react";
import "./DropDownMenu.scss";
import { useUserContext } from "../../../../user-context/UserContextProvider";
import { useNavigate } from "react-router";
import { DropDownMenuProps } from "./DropDownMenuProps";

const DropDownMenu: React.FC<DropDownMenuProps> = ({ handleLogout }) => {
  const { logOut } = useUserContext();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logOut();
    navigate("./home");
    handleLogout();
  };

  return (
    <div className="dropdown-menu">
      <div className="menu-item" onClick={handleLogoutClick}>
        <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
        Logout
      </div>
    </div>
  );
};

export default DropDownMenu;
