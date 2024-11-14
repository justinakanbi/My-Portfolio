import React from 'react'
import profile from "../assets/About Me.png";

const About = () => {
  return (
    <div id="about" className="d-flex align-items-center">
    <div className="about-me">
      <img src={profile} alt="" />
    </div>
    <div className="about-txt">
      <div className="first-about-txt">
        <p>About</p>
        <h4>About Me</h4>
      </div>
      <p className="about-par">
        Hi, I'm Damilare, a passionate web-developer dedicated to creating
        user-friendly webApps,I ensure a smooth experience across all devices. I love to collaborate
        and always learn to stay updated with industry activities.
         Let's create something Great!.
      </p>
    </div>
  </div>
  )
}

export default About