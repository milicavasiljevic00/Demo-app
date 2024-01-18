import { useEffect } from "react";
import { MenuItemsBase } from "../items-list/menu-items/MenuItemsBase";
import { MenuItemsUser } from "../items-list/menu-items/MenuItemsUser";
import { MenuItemsSwitchProps } from "./MenuItemsSwitchProps";
import { MenuItemsAdmin } from "../items-list/menu-items/MenuItemsAdmin";
import { MenuItemsWarehouseAdmin } from "../items-list/menu-items/MenuItemsWarehouseAdmin";

const useMenuItemsSwitch = ({ user, setItems }: MenuItemsSwitchProps) => {
  useEffect(() => {
    switch (user.role) {
      case 'USER':
        setItems(MenuItemsUser);
        break;
      case 'ADMINISTRATOR':
        setItems(MenuItemsAdmin);
        break;
      case 'WAREHOUSE_ADMINISTRATOR':
        setItems(MenuItemsWarehouseAdmin);
        break;
      default:
        setItems(MenuItemsBase);
        break;
    }
  }, [user, setItems]);
};

export default useMenuItemsSwitch;
  