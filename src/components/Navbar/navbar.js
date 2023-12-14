import React from 'react'
import './navbar.css'
import logo from "../../assets/logo2.jpg";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo}  alt='Logo' className='logo'/>
        <div className='desktopMenu'>

        </div>
        <button className='desktopMenu'>
            <img src="" alt='logo' className='logo' />
            Contact Me
        </button>

    </nav>
  )
}

export default Navbar