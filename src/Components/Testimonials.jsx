import React from 'react'
import stars from "../assets/Stars.png";
import picone from "../assets/Avatar Image1.png";
import pictwo from "../assets/Avatar Image2.png";
import picthree from "../assets/Avatar Image3.png";


const Testimonials = () => {
  return (
    <div id="testimonial">
    <div className="client">
      <h5 className="m-0">Clients Feedback</h5>
      <h3 className="m-0">Customer testimonials</h3>
    </div>
    <div className="testimonial-grid">
      <div className="test">
        <img src={stars} alt="" />
        <p className="m-0">
          "Damilare's great skills helped to improve our online revenue,
          resulting an increase in customer interest. His service is highly recommended."
        </p>
        <div className="d-flex align-items-center avatar">
          <img src={picone} alt="" />
          <div>
            <h5 className="m-0">Dianne Russell</h5>
            <p className="m-0">Starbucks</p>
          </div>
        </div>
      </div>

      <div className="test">
        <img src={stars} alt="" />
        <p className="m-0">
          "Mr Damilare beautifully developed our website. His  attention to details is great to behold."
        </p>
        <div className="d-flex align-items-center avatar">
          <img src={pictwo} alt="" />
          <div>
            <h5 className="m-0">Kristin Watson</h5>
            <p className="m-0">Louis Vuitton</p>
          </div>
        </div>
      </div>

      <div className="test">
        <img src={stars} alt="" />
        <p className="m-0">
          Damilare helped developed a smooth webApp, that integrated interactions between  clients and customers
        </p>
        <div className="d-flex align-items-center avatar">
          <img src={picthree} alt="" />
          <div>
            <h5 className="m-0">Kathryn Murphy</h5>
            <p className="m-0">McDonald's</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
  

export default Testimonials