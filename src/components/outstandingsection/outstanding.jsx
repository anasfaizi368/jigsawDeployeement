import React, { useEffect, useState } from "react";
import "./outstanding.css";
import Custombutton from "../custombutton/custombutton";
import InputFeild from "../inputfeild/input";
import Textarea from "../textarea/textarea";

const Outstanding = (props) => {
  const changeWordList = props.changeWordList || null;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (changeWordList) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % changeWordList.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [changeWordList]);

  return (
    <div className="main_div_outstanding">
      <div className="outstanding_div_1">
        <img
        // className="outstanding_div_1_image"
        className={props.className}
          src={props.section_1_image}
          alt=""
        />
        <h1 className="heading_1_outstanding">{props.heading_1}</h1>
        {changeWordList && (




         <div className="revo-special">
             
            <div
              className="slider-content"
              style={{ transform: `translateY(-${currentIndex * 60}px)` }}
            >
              {changeWordList.map((word, index) => (
                
       
               <div
                  key={index}
                  className={`slide ${index === currentIndex ? "active" : ""}`}
                >
                  {word}
                </div>
                
             
              ))}
            </div>
          </div>

        )}

        <p className="phagraph_outstanding_section">
          {props.pharagraph}
        </p>
        <div className="custom_button_outstanding_1">
          <Custombutton button_text="Book a Free Demo" />
        </div>
      </div>

      <div className="outstanding_div_2">
      {props.heading_name_text ? (
          <h1 className="name_input_replace_text">{props.heading_name_text}</h1>
        ) : (
          <InputFeild type="text" placeholder="Full Name" />
        )}  
        <InputFeild type="number" placeholder="Mobile Number" />
        <InputFeild type="email" placeholder="Email" />
        <Textarea />
        <div className="custom_button_outstanding_2">
          <Custombutton button_text="Book a Free Demo" />
        </div>
      </div>
    </div>
  );
};

export default Outstanding;
