import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from '../utils/Dropdown';
import "./Wrapper.css"

const Wrapper = () => {
  return (
    <div className='wrapper'>
        <FavoriteIcon/>
        <ShoppingCartIcon/>
        <Dropdown/>
    </div>
  )
}

export default Wrapper