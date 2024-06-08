import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <>
    <section class="header-section">
    <header class="header">
        <div class="logo"><a href="https://wa.link/at5ion">Kingsukh<br/>Guest House</a></div>
        
        <div class="header-menu">
            <a href="" class="menu-item">Home</a>
            <a href="#about" class="menu-item">About</a >
            <a href="#services" class="menu-item">Services</a>
            <a href="#rooms" class="menu-item">Rooms</a>
            <a href="#gallery" class="menu-item">Gallery</a>
            <a href="" class="menu-item">Account</a>
        </div>
        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className='hame_menu'><a href="" class="menu-item">Home</a>
            <a href="#about" class="menu-item">About</a >
            <a href="#services" class="menu-item">Services</a>
            <a href="#rooms" class="menu-item">Rooms</a>
            <a href="#gallery" class="menu-item">Gallery</a>
            <a href="" class="menu-item">Account</a></div>
            </Drawer>
        <div class="book-now">
        <a href="https://wa.link/at5ion">
            <button>Book Now</button></a>
            <GiHamburgerMenu onClick={toggleDrawer} className='hamburger' />
        </div>
        
    </header>

    <div class="main-banner">
    
        <img src="x2.png" alt=""/>
      <div className="banner-text"><center><p>Simple - Unique - Friendly</p></center>
      <h2>Make Yourself At Home<br/>
      <center className='guest-house'>In Our <span class="next">Guest House.</span></center></h2>
      
        </div>
        <div className="card1"><a href="https://wa.link/at5ion"><button>Book now</button></a></div>
      
    </div>

    </section>

    </>
    
  )
}

export default Header