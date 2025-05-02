import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
    let {wishlist}=useSelector((state)=>state.wishlist);
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist