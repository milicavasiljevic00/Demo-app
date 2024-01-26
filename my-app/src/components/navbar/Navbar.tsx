import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useUserContext } from "../../user-context/UserContextProvider";
import { MenuItemsBase } from "./items-list/menu-items/MenuItemsBase";
import { MenuItems } from "./items-list/menu-items/MenuItems";
import ItemsList from "./items-list/ItemsList";
import useMenuItemsSwitch from "./items-switch/UseMenuItemsSwitch";
import DropDownMenu from "./items-list/drop-down-menu/DropDownMenu";
import "./Navbar.scss";
import { useCartContext } from "../../cart-context/CartContextProvider";

const Navbar: React.FC = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [items, setItems] = useState<MenuItems>(MenuItemsBase);
  const [downMenu, setDownMenu] = useState<boolean>(false);

  const navigate = useNavigate();
  const { user } = useUserContext();
  const { orderProducts } = useCartContext();

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const toggleDropDownMenu = () => {
    setDownMenu(!downMenu);
  };

  const handleCartClick = () => {
    navigate("./my-cart");
  };

  useMenuItemsSwitch({ user, setItems });

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgb(226, 72, 33)" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            fontFamily: "cursive",
            fontSize: "32px",
          }}
        >
          ShopEase
        </Typography>

        {user && user.role !== "" && user.role === "USER" && (
          <Button
            color="inherit"
            className="button-username"
            sx={{ display: { xs: "none", md: "flex" } }}
            onClick={handleCartClick}
          >
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
            {orderProducts.length > 0 && (
              <div className="red-circle">{orderProducts.length}</div>
            )}
          </Button>
        )}

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ItemsList items={items}></ItemsList>
        </Box>

        {user && user.role !== "" && (
          <Button
            color="inherit"
            className="button-username"
            sx={{ display: { xs: "none", md: "flex" } }}
            onClick={toggleDropDownMenu}
          >
            {user.username}
          </Button>
        )}
        {downMenu && (
          <DropDownMenu handleLogout={toggleDropDownMenu}></DropDownMenu>
        )}

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            anchorEl={anchorNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuList>
              {items.items.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      navigate(`/${item.url}`);
                    }}
                  >
                    {item.title}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none", fontFamily: "cursive" },
          }}
        >
          ShopEase
        </Typography>

        {user && user.role !== "" && user.role === "USER" && (
          <Button
            color="inherit"
            className="button-username"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleCartClick}
          >
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
            {orderProducts.length > 0 && (
              <div className="red-circle">{orderProducts.length}</div>
            )}
          </Button>
        )}
        {user && user.role !== "" && (
          <Button
            color="inherit"
            className="button-username"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDropDownMenu}
          >
            {user.username}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
