import React from 'react';
import github from "../assets/mdi_github.png";
import firstport from "../assets/Image1.png";
import secport from "../assets/Image2.png";
import thirdport from "../assets/Image3.png";
import arrow from "../assets/Vector-arr.png";


const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="d-flex justify-content-between align-items-center">
        <div className="recent">
          <p className="m-0">Recent Projects</p>
          <h5 className="m-0">My Portfolio</h5>
        </div>
        <a
          href="https://github.com/justinakanbi"
          target="_blank"
          className="d-flex git"
        >
          <img src={github} alt="" />
          <p className="m-0">Visit My GitHub</p>
        </a>
      </div>
      <div className="portfolio-text">
        <div className="port">
          <img src={firstport} alt="" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">Ahuse</h4>
              <p className="m-0">
                Ahuse is an online rental app, specializing in residential property sales and marketing, with a strong focus on utilizing digital platforms and online marketing strategies to attract buyers. 
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Website</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="port">
          <img src={secport} alt="" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">App Dashboard</h4>
              <p className="m-0">
                The app dashboard demo project visualizes project,
                enabling effective monitoring.{" "}
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Project</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="port">
          <img src={thirdport} alt="" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">Easy Rent</h4>
              <p className="m-0">
                Easy Rent makes the rental process easier, offering adequate
                managements and solutions for both renters and landlords.
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Website</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio