import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuList, MenuItem } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useUserContext } from '../../context/UserContext';
import { MenuItems } from '../menu-items/MenuItems';
import { MenuItemsUser } from '../menu-items/MenuItemsUser';
import { useEffect } from 'react';


const Navbar: React.FC = () => {

  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [items,setItems]=useState(MenuItems);
  
  const navigate = useNavigate();
  const {user} = useUserContext();

  const openMenu = (event:MouseEvent<HTMLElement>)=>{
    setAnchorNav(event.currentTarget);
  };

  const closeMenu=()=>{
    setAnchorNav(null);
  };

  useEffect(()=> {
    user.role==="" && setItems(MenuItems);
    user.role==="USER" && setItems(MenuItemsUser);
  },[user])
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:'none', md:'flex'} }}>
            Caption
        </Typography>
        <Box sx={{display:{xs:'none', md:'flex'}}}>
            {items.map((item,index)=>{
                return (
                  <Button key={index} color="inherit" component={Link} to={`/${item.url}`} className="button">
                    {item.title}
                  </Button>
                )
            })}
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
                  {items.map((item, index)=>{
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
