import React from "react";
import "./Feature.css";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/footer/footer";
import Outstanding from "../../components/outstandingsection/outstanding";
import CommonHeader from "../../components/commonHeader/commonHeader";
import Digitalordering from "../../components/aboutusComponents/digitalOrdering/digitalordering";
import Maxwidthdiv from "../../components/FeatureComponents/MaxwidhtDiv/Maxwidthdiv";
import MobileApplication from "../../components/FeatureComponents/MobileApplication/MobileApplication";

const Feature = () => {
  return (
    <>
      <Navbar />
      <CommonHeader
        heading_1="Home-Feature"
        pharagraph="EMPOWER , YOURCUSTOMERS ELEVATE , YOUR BRND"
        heading_2={
          <>
            Unlock Endless Possibilities With <br />
            Jigsaw Products Features!
          </>
        }
      />
      
      <div className="Digitalordering_feature_div">
        <Maxwidthdiv text="Boost your Business With" />
        <Digitalordering
          heading="Jigsaw Mobile Aplication"
          pharagraph={
            <>
              Our Mobile App empowers your customers with seamless ordering and
              engagement, offering convenience
              <br />  right at their fingertips. 
            </>
          }
        />
     
        <MobileApplication image="./feature_1.png" section_title="Mobile" image_no="1"/>
      </div>

{/* ---------------------------2nd section---------------------- */}
<div className="Digitalordering_feature_div">
        <Maxwidthdiv text="Boost your Business With" />
        <Digitalordering
          heading="Jigsaw Mobile Aplication"
          pharagraph={
            <>
              Our Mobile App empowers your customers with seamless ordering and
              engagement, offering convenience
              <br />  right at their fingertips. 
            </>
          }
        />
     
        <MobileApplication image="./feature_2.png" section_title="web" image_no="2" />
      </div>
















      <Outstanding
        section_1_image="./outstanding_bg_2.png"
        className="outstanding_div_2_image"
        heading_1="Let’s make something "
        pharagraph="Evaluate your business now with Jigsaw Solutions"
        changeWordList={[
          "EXCEPTIONAL",
          "OUTSTANDING",
          "STRAGITIC",
          "ENGAGING",
          "INNOVATIVE",
        ]}
        heading_name_text="Let us support you in starting your business growth journey."
      />
      <Footer />
    </>
  );
};

export default Feature;
