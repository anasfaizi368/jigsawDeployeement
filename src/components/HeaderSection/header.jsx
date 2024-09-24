import React, { useEffect, useState } from "react";
import "./header.css";
const header = (Props) => {
  const changeWordList = ["ORDERING", "PYMENT", "DELIVERY"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % changeWordList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
      <div className="div_main">
    
        <video autoPlay muted loop className="background-video">
          {/* <source src={Props.bg_video} type="video/mp4" /> */}
          <source src="./vid_2.mp4" type="video/mp4" />
        </video>
        <div className="main_div">
          <div className="heading_section">
            <h2 className="p2">Your All-in-one </h2>
            <h2 className="p2">
              Cloud-Based Solution for{" "}
              <div className="revo-special">
                {" "}
                <div
                  className="slider-content"
                  style={{ transform: `translateY(-${currentIndex * 60}px)` }}
                >
                  {changeWordList.map((word, index) => (
                    <div
                      key={index}
                      className={`slide ${
                        index === currentIndex ? "active" : ""
                      }`}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </h2>
            <p>Buy , sell , & Trade Over 500 Markets </p>
          </div>

          <div className="logo_animation">
            <div className="circle_div_1">
              <svg
                className="text_circle"
                width="150"
                height="150"
                viewBox="0 0 150 150"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 75, 75 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text fill="white" fontSize="15">
                  <textPath href="#circlePath" startOffset="0%">
                    play showreel
                  </textPath>
                  <textPath href="#circlePath" startOffset="25%">
                    play showreel
                  </textPath>
                  <textPath href="#circlePath" startOffset="50%">
                    play showreel
                  </textPath>
                  <textPath href="#circlePath" startOffset="75%">
                    play showreel
                  </textPath>
                </text>
              </svg>

              <div className="circle_div_2">
                <svg
                  className="text_circle"
                  width="100"
                  height="100"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 75, 75 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    />
                  </defs>

                  <text fill="white" fontSize="15">
                    <textPath href="#circlePath" startOffset="0%">
                      play showreel
                    </textPath>
                    <textPath href="#circlePath" startOffset="25%">
                      play showreel
                    </textPath>
                    <textPath href="#circlePath" startOffset="50%">
                      play showreel
                    </textPath>
                    <textPath href="#circlePath" startOffset="75%">
                      play showreel
                    </textPath>
                  </text>
                  <svg className="play_button_icon" viewBox="0 0 100 100">
                    <polygon points="35,25 65,50 35,75" />
                  </svg>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default header;
