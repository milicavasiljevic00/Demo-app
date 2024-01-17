import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuList, MenuItem } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useUserContext } from '../../context/UserContextProvider';
import { MenuItemsBase } from './items-list/menu-items/MenuItemsBase';
import { MenuItemsUser } from './items-list/menu-items/MenuItemsUser';
import { useEffect } from 'react';
import { MenuItems } from './items-list/menu-items/MenuItems';
import ItemsList from './items-list/ItemsList';
import useMenuItemsSwitch from './items-switch/UseMenuItemsSwitch';


const Navbar: React.FC = () => {

  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [items,setItems]=useState<MenuItems>(MenuItemsBase);
  
  const navigate = useNavigate();
  const {user} = useUserContext();

  const openMenu = (event:MouseEvent<HTMLElement>)=>{
    setAnchorNav(event.currentTarget);
  };

  const closeMenu=()=>{
    setAnchorNav(null);
  };

  useMenuItemsSwitch({user, setItems});
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:'none', md:'flex'} }}>
            Caption
        </Typography>
        <Box sx={{display:{xs:'none', md:'flex'}}}>
            <ItemsList items={items}></ItemsList>
        </Box>

        {
          user.role==="USER" && 
          <Button color="inherit" className="button-username">
            {user.username}
          </Button>
        }
        
        <Box sx={{display:{xs:'flex', md:'none'}}}>
            <IconButton size='large' color='inherit' edge='start' onClick={openMenu}>
                <MenuIcon />
            </IconButton>
            <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'flex', md:'none'}}}>
                <MenuList>
                  {items.items.map((item, index)=>{
                      return (
                        <MenuItem key={index} onClick={() => {navigate(`/${item.url}`)}}>{item.title}</MenuItem>
                      )
                  })}
                </MenuList>
            </Menu>
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:'flex', md:'none'} }}>
            Caption
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
