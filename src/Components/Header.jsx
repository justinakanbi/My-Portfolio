import React from 'react'
import { Link } from "react-scroll";
import profile from "../assets/Group 11 1.png";
const Header = () => {
  return (
    <div>
        <header id="header" className="d-flex">
        <div className="header-txt">
          <h4 className="m-0">Hey, I am Damilare</h4>
          <h2 className="m-0">
            I develop dynamic and User-Centered Web Applications
          </h2>
          <p className="m-0">
            My expertise spans both front-end and back-end development, enabling
            me to build comprehensive solutions that meet diverse client needs.
          </p>

          <Link to="contact" className=" header-butt ">
            Get In Touch
          </Link>
        </div>
        <div className="header-image">
          <img src={profile} alt="" />
        </div>
      </header>
    </div>
  )
}

export default Header