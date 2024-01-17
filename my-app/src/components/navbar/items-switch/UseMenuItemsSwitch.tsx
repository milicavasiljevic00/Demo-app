import { Dispatch, SetStateAction, useEffect } from "react";
import { useUserContext } from "../../../context/UserContextProvider";
import { MenuItemsBase } from "../items-list/menu-items/MenuItemsBase";
import { MenuItemsUser } from "../items-list/menu-items/MenuItemsUser";
import { Item } from "../items-list/menu-items/Item";
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
  