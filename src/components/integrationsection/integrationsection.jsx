import React from "react";
import "./integrationsection.css";
const integrationsection = () => {
  return (
    <div className="integration_main_section">
      <div className="child_div_integration_1">
        <h1 className="integration_heading">Integration</h1>
        <span className="sub_heading_integration">
          The Future of Integration,
          <br /> Delivered Today.
        </span>
        <p className="pharagraph_integration">
          Positions your system as a cutting-edge solution,
          <br /> providing advanced integration capabilities that
          <br /> are ahead of their time.
        </p>
      </div>

      <div className="child_div_integration_2">
        <div className="div1_earth_logs">
          <img
            style={{ marginTop: "4rem", marginLeft: "3rem" }}
            src="./logo_1.png"
            alt=""
          />{" "}
          <img src="./logo_2.png" alt="" />
          <img
            style={{ marginTop: "4rem", marginRight: "3rem" }}
            src="./logo_3.png"
            alt=""
          />
        </div>

        <div className="div2_earth_logs">
          {" "}
          <div className="child_logos">
            {" "}
            <img src="./logo_4.png" alt="" /> <img src="./logo_5.png" alt="" />
          </div>
          <div className="earth_image_section">
            <img src="./logo_white.png" alt="" />
          </div>{" "}
          <div className="child_logos">
            {" "}
            <img src="./logo_6.png" alt="" /> <img src="./logo_7.png" alt="" />
          </div>
        </div>
        <div className="div3_earth_logs">
          <img
            style={{ marginBottom: "4rem", marginLeft: "3rem" }}
            src="./logo_8.png"
            alt=""
          />{" "}
          <img src="./logo_9.png" alt="" />
          <img
            style={{ marginBottom: "4rem", marginRight: "3rem" }}
            src="./logo_10.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default integrationsection;
