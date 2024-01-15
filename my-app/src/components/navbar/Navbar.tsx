import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuList, MenuItem } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar: React.FC = () => {

  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const openMenu = (event:MouseEvent<HTMLElement>)=>{
    setAnchorNav(event.currentTarget);
  };
  const closeMenu=()=>{
    setAnchorNav(null);
  };
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:'none', md:'flex'} }}>
            Caption
        </Typography>
        <Box sx={{display:{xs:'none', md:'flex'}}}>
          <Button color="inherit" component={Link} to="/home" className="button">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products" className="button">
            Products
          </Button>
          <Button color="inherit" onClick={() => {navigate('/login')}} className="button">
            Login
          </Button>
          <Button color="inherit" onClick={() => {navigate('/register')}} className="button">
            Register
          </Button>
        </Box>
        <Box sx={{display:{xs:'flex', md:'none'}}}>
            <IconButton size='large' color='inherit' edge='start' onClick={openMenu}>
                <MenuIcon />
            </IconButton>
            <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'flex', md:'none'}}}>
                <MenuList>
                    <MenuItem onClick={() => {navigate('/home')}}>Home</MenuItem>
                    <MenuItem onClick={() => {navigate('/products')}}>Products</MenuItem>
                    <MenuItem onClick={() => {navigate('/login')}}>Login</MenuItem>
                    <MenuItem onClick={() => {navigate('/register')}}>Register</MenuItem>
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
