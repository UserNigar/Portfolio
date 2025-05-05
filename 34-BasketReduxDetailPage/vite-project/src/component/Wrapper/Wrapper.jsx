import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from '../utils/Dropdown';
import "./Wrapper.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Wrapper = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <div className="icon-wrapper" onClick={() => navigate('/wishlist')}>
        <FavoriteIcon />
          <sup style={{
            fontSize:"15px"
          }} >{wishlist.length}</sup>
      </div>
      <div className="icon-wrapper" onClick={() => navigate('/basket')}>
      <ShoppingCartIcon />
          <sup style={{
            fontSize:"15px"
          }} >{wishlist.length}</sup>
      </div>
     
      <Dropdown />
    </div>
  );
};

export default Wrapper;
