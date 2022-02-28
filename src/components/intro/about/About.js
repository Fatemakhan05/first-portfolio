import React from "react";
import "./About.css";
 import Award from "../../../img/award.png"
const About = () => {
  return (
    <div>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            nesciunt placeat ipsum, quibusdam dolore doloremque voluptate,
            similique commodi necessitatibus pariatur dolorem. Distinctio,
            molestias.
          </p>
          <p className="a-desc">
            I design and develope services for customers of all sizes
            ,specializing in creating stylish ,modern websites,webserver,online
            stores
          </p>
          <div href="" className="a-award">
              <img src={Award} alt="" className="a-award-img"/>
         
          <div className="a-award-texts">
              <h4 className="a-award-title">International design</h4>
              <p className="a-award-desc">

                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quo.
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
