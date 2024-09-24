import React from "react";
import "./MobileApplication.css";
import FeatureBox from "../featureBoxcomponents/featureBox";

const MobileApplication = (props) => {
  return (
    <div className="main_section_mobile_application">
      <div className= {`child_main-${props.section_title}-application`}>
        <div className="child_div-mobile_application_1">
          <img className= {`image_${props.image_no}_feature`} src={props.image} alt="" />
        </div>

        <div className="child_div-mobile_application_2">
          <div className="feature_1_boxs_section">
            {" "}
            <FeatureBox
              heading_1=" User-Friendly Interface"
              text_1="Intuitive design for easy navigation  "
              text_2=" and quick access to menus and promotions."
            />
            <FeatureBox
              heading_1=" User-Friendly Interface"
              text_1="Intuitive design for easy navigation  "
              text_2=" and quick access to menus and promotions."
              mainClass="heading_pink"
            />
            <FeatureBox
              heading_1=" User-Friendly Interface"
              text_1="Intuitive design for easy navigation  "
              text_2=" and quick access to menus and promotions."

            />
          </div>
          <div className="feature_2_boxs_section">
            {" "}
            <FeatureBox
              heading_1=" User-Friendly Interface"
              text_1="Intuitive design for easy navigation  "
              text_2=" and quick access to menus and promotions."
              mainClass="heading_pink"

            />
            <FeatureBox
              heading_1=" User-Friendly Interface"
              text_1="Intuitive design for easy navigation  "
              text_2=" and quick access to menus and promotions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApplication;
