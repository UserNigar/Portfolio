import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import Person4Icon from '@mui/icons-material/Person4';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dropdown() {
  const navigate = useNavigate();
  const [existUser, setexistUser] = useState([]);

  const getUser = async () => {
    let { data } = await axios('http://localhost:3000/users');
    setexistUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  let isLoginUser = existUser.find((user) => user.isLogined === true);

  const handleLogout = async () => {
    if (isLoginUser) {
      await axios.patch(`http://localhost:3000/users/${isLoginUser.id}`, {
        isLogined: false,
      });
      getUser();
      navigate('/');
    }
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <Person4Icon /> {isLoginUser ? isLoginUser.username : "User"}
          </Button>

          <Menu {...bindMenu(popupState)}>
  {
    isLoginUser ? (
      <MenuItem
        onClick={() => {
          popupState.close();
          handleLogout();
        }}
      >
        Logout
      </MenuItem>
    ) : (
      [
        <MenuItem
          key="register"
          onClick={() => {
            popupState.close();
            navigate('/register');
          }}
        >
          Register
        </MenuItem>,
        <MenuItem
          key="login"
          onClick={() => {
            popupState.close();
            navigate('/login');
          }}
        >
          Login
        </MenuItem>
      ]
    )
  }
</Menu>

        </>
      )}
    </PopupState>
  );
}
