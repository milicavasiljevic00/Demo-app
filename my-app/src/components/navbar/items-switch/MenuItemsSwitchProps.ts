import { UserContent } from "../../../context/UserContent";
import { Dispatch, SetStateAction } from 'react';
import { MenuItems } from "../items-list/menu-items/MenuItems";

type SetItemsFunction = Dispatch<SetStateAction<MenuItems>>;

export interface MenuItemsSwitchProps {
    user: UserContent;
    setItems: SetItemsFunction; 
  }