import React from 'react'
import { Link } from 'react-router-dom'
import './Navlist.css'

const Navlist = () => {
  return (
    <ul className='list'>
      <li className='list_item'><Link to={"/"}>Home</Link></li>
      <li className='list_item'><Link to={"/about"}>About</Link></li>
      <li className='list_item'><Link to={"/contact"}>Contact</Link></li>
      <li className='list_item'><Link to={"/admin"}>Admin</Link></li>
    </ul>
  )
}

export default Navlist