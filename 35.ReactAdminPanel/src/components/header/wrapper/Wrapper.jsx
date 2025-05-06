import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Dropdown from '../../../utils/Dropdown';
import './Wrapper.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from '../../product/Product';

const Wrapper = () => {
  let {wishlist} = useSelector((state) => state.wishlist)
  let {basket} = useSelector((state) => state.basket)

  let basketCount = basket.reduce((sum, product) => sum + product.count, 0)
  return (
    <div className='wrapper'>
      <Link to={"/wishlist"}>
        <FavoriteIcon style={{cursor: "pointer"}}/>
        <sup style={{fontSize: "15px"}}>{wishlist.length}</sup>
      </Link>
      <Link to={"/basket"}>
        <ShoppingBasketIcon style={{cursor: "pointer"}}/>
        <sup style={{fontSize: "15px"}}>{basketCount}</sup>
      </Link>
      <Dropdown/>
    </div>
  )
}

export default Wrapper