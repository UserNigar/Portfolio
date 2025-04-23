import React from 'react'
import styles from './Navbar.module.css' 
import './nav.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.containers}>
        <div className={styles.logo}>
          <h1>Start Bootstrap</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
