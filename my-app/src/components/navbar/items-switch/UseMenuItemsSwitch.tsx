import { useEffect } from "react";
import { MenuItemsBase } from "../items-list/menu-items/MenuItemsBase";
import { MenuItemsUser } from "../items-list/menu-items/MenuItemsUser";
import { MenuItemsSwitchProps } from "./MenuItemsSwitchProps";

const useMenuItemsSwitch = ({ user, setItems }: MenuItemsSwitchProps) => {
  useEffect(() => {
    switch (user.role) {
      case 'USER':
        setItems(MenuItemsUser);
        break;
      default:
        setItems(MenuItemsBase);
        break;
    }
  }, [user, setItems]);
};

export default useMenuItemsSwitch;
  