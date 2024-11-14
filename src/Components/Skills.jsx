import React from 'react';
import phone from "../assets/Strategy & Direction.png";
import framework from "../assets/Branding & Logo.png";
import testing from "../assets/roll.png";
import cloud from "../assets/Webflow Development.png";

const Skills = () => {
  return (
    <div className="skills">
    <div className="skills-txt">
      <h4 className="m-0">My Skills</h4>
      <h2 className="m-0">My Expertise</h2>
    </div>
    <div className="skill">
      <div className="first_skill">
        <div className="img-1">
          <img src={phone} alt="" />
        </div>
        <div className="first_skill_txt">
          <h5 className="m-0">Responsive Design</h5>
          <p className="m-0">
            Skilled in responsive design for smooth user experiences across
            all devices.
          </p>
        </div>
      </div>
      <div className="first_skill">
        <div className="img-1">
          <img src={framework} alt="" />
        </div>
        <div className="first_skill_txt">
          <h5 className="m-0">Front-End Frameworks</h5>
          <p className="m-0">
            Skilled in HTML, CSS, JavaScript, and React for creating
            dynamic, and user-friendly webApps.
          </p>
        </div>
      </div>
      <div className="first_skill">
        <div className="img-1">
          <img src={testing} alt="" />
        </div>
        <div className="first_skill_txt">
          <h5 className="m-0">Testing and Debugging</h5>
          <p className="m-0">
            Experienced in testing and debugging using console tools to ensure
            code accuracy and efficiency.
          </p>
        </div>
      </div>
      <div className="first_skill">
        <div className="img-1">
          <img src={cloud} alt="" />
        </div>
        <div className="first_skill_txt">
          <h5 className="m-0">Cloud Services</h5>
          <p className="m-0">
          Designed and implemented a hybrid cloud environment on AWS and Azure, improving system uptime and scalability by 25%.
          </p>
        </div>
      </div>
    </div>
  </div>
);
  
}

export default Skills