import React from 'react'
import Logo from '../Logo/Logo'
import Wrapper from '../Wrapper/Wrapper'
import Navlist from '../Navlist/Navlist'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar container'>
        <Logo/>
        <Navlist/>
        <Wrapper/>
    </div>
  )
}

export default Navbar