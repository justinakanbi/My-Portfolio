import React from 'react'
import { Link } from "react-scroll";
import logo from "../assets/image 1.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import linked from "../assets/lin.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center">
            <img src={logo} alt="" />
            <h4 className="m-0">DamDev,</h4>
          </div>
          <div className="fott-link">
            <Link to="header">Home</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="about">About me</Link>
            <Link to="contact">Contact</Link>
            <Link to="testimonial">Testimonials</Link>
            <Link to="portfolio">Portfolio</Link>
          </div>
          <div>
            
              <img src={facebook} alt="" />
            
            
              <img src={instagram} alt="" />
            
              <img src={twitter} alt="" />
           <img src={linked} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-between done">
          <h5>Made with 💖 by Damilare</h5>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
