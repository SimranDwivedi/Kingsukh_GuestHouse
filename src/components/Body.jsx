import React from "react";
import { RiShieldStarLine } from "react-icons/ri";
import { Ri24HoursFill } from "react-icons/ri";
import { IoMdRestaurant } from "react-icons/io";
import { CiMap } from "react-icons/ci";
import { GrMap } from "react-icons/gr";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
// import Gallery from '../components/Gallery'
const Body = () => {
  return (
    <>
      {/* <Gallery/> */}
      <div id="about">
        <div className="about">
          <img src="./out.jpg" alt="" height="600px" />
        </div>
        <div className="text">
          <b>
            <h2>ABOUT US</h2>
          </b>
          <br />
          <br />
          <h1>
            <b>The Best Holidays Start Here!</b>
          </h1>
          <br />
          <span className="next2">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
            <br />
            <br />
            <a href="">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </a>
            <br />
            <br />
            <a href="">Contact us: +91 9007062180</a>
          </span>
          <br />
          <br />
          <div class="book-now">
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div className="rooms" id="rooms">
        <h2>OUR LIVING ROOM</h2>
        <br />
        <span className="next3">
          <b>
            The Most Memorable Rest
            <br /> Time Starts Here.
          </b>
        </span>
        <div class="card-group">
          <div class="card">
            <img src="small.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h2 class="card-title">Cozy Haven Room </h2><br/>
              <p class="card-text">
                Escape to comfort in our Cozy Haven Room, a snug
                retreat designed for intimate relaxation. <br/><br/>Starting from<b> Rs.
                1000/night</b>
              </p>
              <br/>
              <div class="book-now">
            <button>Book Now</button>
        </div>
            </div>
          </div>
          <div class="card">
            <img src="large.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h2 class="card-title">Spacious Serenity Suite</h2><br/>
              <p class="card-text">
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.<br/><br/>Starting from <b>Rs. 1500/night</b>
              </p>
              <br/>
              <div class="book-now">
            <button>Book Now</button>
        </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <div>
          <img src="palash.webp" ></img>
        </div>
        <div className="services-text">
          <h2>Services</h2><br/>
          <h1>Strive Only For The<br/> Best.</h1><br/>
          <ul><li><RiShieldStarLine color="#60a5fa" className="icon1" size={40}/><p>High Class Security</p></li><br/>
              <li><Ri24HoursFill color="#f472b6" className="icon2" size={40}/><p>24 Hours Room Service</p></li><br/>
              <li><IoMdRestaurant color="#c084fc" className="icon3" size={40}/><p>Restaurant</p></li><br/>
              <li><CiMap  color="#fb7185;" className="icon4" size={40}/><p>Tourist Guide Support</p></li><br/></ul>
        </div>
        <div className="sevices-img">
          <img src="palash.webp" ></img>
        </div>
      </div>
      <div>
      <div className="coustomer"><div className="card7"><div className="hundred"><b>100+<br/></b>Bookings Completed</div><div className="onefifty"><b>150+<br/></b><span>Happy Customers</span></div></div></div>
      </div>
      <div className="gallery">
      
				<div className='item'>
					<img src='/1.jpg' alt='' />
				</div>
				<div className='item'>
					<img src='/x2.png' alt='' />
				</div>
				<div className='item'>
					<img src='/baranti.webp' alt='' />
				</div>
				<div className='item'>
					<img src='/flower.jpg' alt='' />
				</div>
				<div className='item'>
					<img src='/mithonDam.webp' alt='' />
				</div>
				<div className='item'>
					<img src='/out.jpg' alt='' />
				</div>
				<div className='item'>
					<img src='/palash.webp' alt='' />
				</div>
				<div className='item'>
					<img src='/recep.jpg' alt='' />
				</div>
				<div className='item'>
					<img src='/room1.jpg' alt='' />
				</div>
				<div className='item'>
					<img src='/service.jpg' alt='' />
				</div>
			</div>
      <section id="contact" class="section1">
      <div class="container1">
          <div class="contactInfo1"> 
              <div>
                  <h2>Contact Info</h2>
                  <ul class="info" >
                      <li>
                          <GrMap color="white"/>
                          <p>Beside Barshal Water Tank,<br/>
                            Manpur, Barhanti,<br/>
                            West Bengal 723156</p>
                          
                      </li>
                      <li>
                        <IoMailOpenOutline color="white"/>
                          <p><a href = "mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
                      </li>
                      <li>
                        <LuPhoneCall color="white"/>
                        <p><a href="tel:+919007062180"> +91 9007062180 </a></p>
                      </li>

                  </ul>
              </div><br/>
              <ul class="sci">
                  <li><a href="#"><FaFacebookF color="white"/></a></li>
                  <li><a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank"><IoLogoInstagram color="white"/></a></li>
                  <li><a href="#"><FaTwitter color="white"/></a></li>
                  <li><a href="#"><FaLinkedinIn color="white"/></a></li>
                  
              </ul>
          </div>
              <div class="contactForm1">
                  <h2>Send a Message</h2>
                  <div class="formBox1">
                  <div class="inputBox1 w50">
                      <input type="text" name="" required/>
                      <span>First Name</span>
                  </div>
                  <div class="inputBox1 w50">
                      <input type="text" required/>
                      <span>Last Name</span>
                  </div>
                  <div class="inputBox1 w50">
                      <input type="email" required/>
                      <span>Email Address</span>
                  </div>
                  <div class="inputBox1 w50">
                      <input type="text" required/>
                      <span>Mobile Number</span>
                  </div>
                  <div class="inputBox1 w100">
                      <textarea required></textarea>
                      <span>Write your message here...</span>
                  </div>
                  <div class="inputBox1 w100">
                      <input type="submit" value="Send"/>
                  </div>
              </div>
          </div> 
          </div>
      </section>
      <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  
      
    </>
  );
};

export default Body;
