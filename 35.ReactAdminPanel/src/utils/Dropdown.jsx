import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Dropdown() {

  const [existUser, setExistUser] = useState("")

  const getUsers = async () => {
    let {data} = await axios("http://localhost:3000/users")
    let isLoginedUser = data.find((user) => user.isLogined == true)
    setExistUser(isLoginedUser)
  }

  const logOut = async () => {
    if (existUser) {
      await axios.put(`http://localhost:3000/users/${existUser.id}`, {
        ...existUser, 
        isLogined: false
      })
      setExistUser(null)
    } 
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button 
            variant="outlined" 
              size='small'
                {...bindTrigger(popupState)} 
                  startIcon={<AccountCircleIcon/>}
                    style={{textTransform: "capitalize"}}>
            {existUser?.username ?? "Profile"}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {
              existUser ? (
                <MenuItem component={Link} onClick={() => {popupState.close(); logOut()}}>
                  Logout
                </MenuItem>
              ) : (
                <div>
                  <MenuItem component={Link} to="/register" onClick={popupState.close}>
                    Register
                  </MenuItem>
                  <MenuItem component={Link} to="/login" onClick={popupState.close}>
                    Login
                  </MenuItem>
                </div>
              )
            }
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
