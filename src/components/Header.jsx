import React from 'react'

const Header = () => {
  return (
    <>
    <section class="header-section">
    <header class="header">
        <div class="logo">Kingsukh<br/>Guest House</div>
        <div class="header-menu">
            <a href="" class="menu-item">Home</a>
            <a href="#about" class="menu-item">About</a >
            <a href="#services" class="menu-item">Services</a>
            <a href="#rooms" class="menu-item">Rooms</a>
            <a href="#gallery" class="menu-item">Gallery</a>
            <a href="" class="menu-item">Account</a>
        </div>
        <div class="book-now">
            <button>Book Now</button>
        </div>
        
    </header>

    <div class="main-banner">
    
        <img src="x2.png" alt=""/>
      <div className="banner-text"><center><p>Simple - Unique - Friendly</p></center>
      <h2>Make Yourself At Home<br/>
      <center>In Our <span class="next">Guest House.</span></center></h2>
      
        </div>
        <div className="card1"><button>Book now</button></div>
      
    </div>

    </section>

    </>
    
  )
}

export default Header