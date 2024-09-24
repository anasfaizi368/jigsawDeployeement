import React from "react";
import "./ourmission.css";
const Ourmission = (props) => {
  return (
    <div className="main_div_our_mission">
      <div className="our_mission_child_1">
        <div className="heading_plus_image_ourmission">
          <span className="our_mission_heading">
            Our
            <br /> Vision
          </span>
          <img
            className="ourmission_image_1"
            src="./our_mission_1.png"
            alt=""
          />
        </div>
        <div className="pharagraph_ourmission_div">
          <p className="pharagraph_ourmission">
            Jigsaw aims to become the global leader in digital ordering
            solutions, offering unmatched convenience and efficiency to
            businesses and customers worldwide. 
          </p>
        </div>
      </div>

      <div className="our_mission_child_2">
        <div className="heading_plus_image_ourmission">
          <span className="our_mission_heading">
            Our
            <br /> Mission
          </span>
          <img
            className="ourmission_image_2"
            src="./our_mission_2.png"
            alt=""
          />
        </div>
        <div className="pharagraph_ourmission_div">
          <p className="pharagraph_ourmission">
          At Jigsaw®, we are dedicated to empowering businesses around the globe with intuitive ordering solutions. By harnessing digital innovation and seamless integrations, we simplify operations, drive growth, and strengthen customer engagement.  
          </p>
        </div>
      </div>
    </div>
  );
};
export default Ourmission;
