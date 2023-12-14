import React from 'react'
import './navbar.css'
import logo from "../../assets/logo2.jpg";
import contactImg from '../../assets/chat-logo.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo}  alt='Logo' className='logo'/>
        <div className='desktopMenu'>
          <Link className='desktopMenuListItem'>Home</Link>
          <Link className='desktopMenuListItem'>About</Link>
          <Link className='desktopMenuListItem'>Portfolio</Link>
          <Link className='desktopMenuListItem'>Projects</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt='logo' className='logo' />
            Contact Me
        </button>

    </nav>
  )
}

export default Navbar