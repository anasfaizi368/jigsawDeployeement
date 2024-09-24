import React from "react";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-main_div">
     
        {" "}
      
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
    

      <div className="footer_child_1">
        <div className="footer_div_1">
          <img src="./Jigsaw_logo.png" alt="Jigsaw Logo" />
          <p className="footer_pharagraph">
            A comprehensive, cloud-based platform designed to <br /> streamline
            ordering processes for the Food and Beverage,
            <br /> Service, Sport, and Retail sectors across the MENA region.
          </p>
        </div>
        <div className="footer_div_2">
          <div className="div_1_heading_footer">
            <span className="footer_2_heading">Features</span>
            <span className="footer_2_heading">News Center</span>
          </div>
          <div className="div_2_heading_footer">
            <span className="footer_2_heading">About US</span>
            <span className="footer_2_heading">Contact Us</span>
          </div>
        </div>
        <div className="footer_div_3">
          <h2 className="footer_div_3_heading">Riyadh, Saudi Arabia</h2>
          <p className="footer_div_3_pharagraph">
            Al Rajmiyah، Almasiaf, Riyadh 12465
          </p>
        </div>
        <div className="footer_div_4">
          <img
            className="social_logos_footr"
            src="./linkdin.png"
            alt="LinkedIn"
          />
          <img
            className="social_logos_footr"
            src="./facebook.png"
            alt="Facebook"
          />
          <img
            className="social_logos_footr"
            src="./instagram.png"
            alt="Instagram"
          />
          <img
            className="social_logos_footr"
            src="./youtube.png"
            alt="YouTube"
          />
          <img
            className="social_logos_footr"
            src="./twiter.png"
            alt="Twitter"
          />
        </div>
      </div>
      <hr className="line_footer" />
      <div className="footer_child_2">
        <div className="footer_bottom_secion_div_1">
          <p className="footer_bottom_secion_div_1_text">Terms & Conditions</p>
          <img
            style={{ marginRight: "20px" }}
            src="./a.png"
            alt="Terms & Conditions"
          />
          <p className="footer_bottom_secion_div_1_text">Privacy Policy</p>
        </div>
        <div className="footer_bottom_secion_div_2">
          <img src="./jigsaw_r.png" alt="Jigsaw" />
          <p className="jigsaw_r">Jigsaw 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
