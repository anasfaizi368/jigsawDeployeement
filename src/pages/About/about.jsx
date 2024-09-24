import React from "react";
import Navbar from "../../components/NavBar/navbar";
import Header from "../../components/HeaderSection/header";
import Footer from "../../components/footer/footer";
import Outstanding from "../../components/outstandingsection/outstanding";
import Testimonial from "../../components/testimonial/testimonial";
import Ourmission from "../../components/aboutusComponents/ourmission/ourmission";
import "./about.css";
import Digitalordering from "../../components/aboutusComponents/digitalOrdering/digitalordering";
import CommonHeader from "../../components/commonHeader/commonHeader";
const About = () => {
  return (
    <>
      <Navbar />
      <CommonHeader
        heading_1="Home-About"
        pharagraph="EMPOWER , YOURCUSTOMERS ELEVATE , YOUR BRND"
        heading_2="About Jigsaw"
      />
      <div className="our_mission_section_about">


        <Digitalordering
          heading="Leading the Future of Digital Ordering with"
          colorHeading="Jigsaw!"
          pharagraph={
            <>
              Established in 2021, Jigsaw has transformed the F&B and Retail
              industries by delivering a suite of cutting-edge
              <br /> effortlesslysolutions that integrate with food ordering
              platforms and other essential systems. 
            </>
          }
        />
      </div>
      <div className="our_mission_section_about">
        <Ourmission />
      </div>
      <Testimonial />
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

export default About;
