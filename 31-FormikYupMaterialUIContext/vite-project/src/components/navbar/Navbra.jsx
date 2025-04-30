import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}>
          LOGO
        </Typography>

        <Button color="inherit" onClick={handleMenu}>Hesab</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {!isLoggedIn && (
            <>
              <MenuItem onClick={() => { navigate('/register'); handleClose(); }}>Register</MenuItem>
              <MenuItem onClick={() => { navigate('/login'); handleClose(); }}>Login</MenuItem>
            </>
          )}
          {isLoggedIn && (
            <MenuItem onClick={() => { logout(); handleClose(); }}>Logout</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
