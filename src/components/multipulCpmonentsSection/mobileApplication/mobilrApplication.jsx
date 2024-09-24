import React, { useState } from "react";
import "./mobileApplication.css";

const MobileApplication = () => {
  const [activeFooter, setActiveFooter] = useState(1);

  const content = {
    1: (
      <>
        <div className="mobile_application_1">
          <span>Fully Customized</span>

          <h2>Mobile Application</h2>
          <p>
            With Jigsaw's advanced ordering technology, <br />
            streamline your operations and enhance customer
            <br />
            experience. Our mobile app enables customers to <br /> quickly and
            easily place orders directly from their smartphones
          </p>
        </div>
      </>
    ),
    2: (
      <>
        <div className="mobile_application_1">
          <span>Fully Customized</span>

          <h2>Web Application</h2>
          <p>
            Harness the power of Jigsaw's web ordering system to <br />
            elevate your restaurant into a seamless online business,
            <br /> enhancing customer attraction and retention.
          </p>
        </div>
      </>
    ),
    3: (
      <>
        <div className="mobile_application_1">
          <span>Easy To Use</span>

          <h2 style={{ color: "#ac2785" }}> Web Application</h2>
          <p>
            Jigsaw's user-friendly kiosks are designed to fit restaurants
            <br /> of all sizes, helping to boost your <br />
            revenue while saving your customers valuable time!
          </p>
        </div>
      </>
    ),
    4: (
      <>
        <div className="mobile_application_1">
          <span>Fully Customized</span>

          <h2 style={{ color: "#FFF41D" }}>Drive-Thru</h2>
          <p>
            Jigsaw's Drive-Thru solution delivers a convenient, seamless,
            <br /> and speedy ordering experience, allowing customers to <br />
            receive their orders without ever leaving their cars!
          </p>
        </div>
      </>
    ),
    5: (
      <>
        <div className="mobile_application_1">
          <span>Fully Customized</span>

          <h2 style={{ color: "#FFF41D" }}>Digital Menu</h2>
          <p>
            Jigsaw's Digital Menu transforms your traditional menu into an{" "}
            <br />
            interactive digital experience. Allow your guests to easily explore
            <br /> your delicious offerings, personalize their orders, and
            elevate <br />
            their dining experience
          </p>
        </div>
      </>
    ),
    6: (
      <>
        <div className="mobile_application_1">
          <span>Fast and smooth</span>

          <h2 style={{ color: "#FFF41D" }}>
            CRM & COS <br /> (Centralized Ordering Software)
          </h2>
          <p>
            Jigsaw's COS allows you to capture and organize customer
            <br /> orders received via phone calls, streamlining processing and
            <br /> enhancing personalized customer experiences.
          </p>
        </div>
      </>
    ),
    7: (
      <>
        <div className="mobile_application_1">
          <span>Fully Customized</span>

          <h2 style={{ color: "#FFF41D" }}>Scan To Order(QR Ordering)</h2>
          <p>
            Jigsaw's Drive-Thru solution delivers a convenient, seamless, <br />
            and speedy ordering experience, allowing customers to receive <br />
            their orders without ever leaving their cars!
          </p>
        </div>
      </>
    ),
    8: (
      <>
        <div className="mobile_application_1">
          <span>Fully Customized</span>

          <h2 style={{ color: "#FFF41D" }}>Loyalty System (AI Powered)</h2>
          <p>
            Jigsaw's AI-Powered Loyalty System uses advanced technology to
            <br /> create personalized rewards and experiences, enhancing
            customer
            <br /> retention and boosting sales through intelligent, data-driven
            insights.
          </p>
        </div>
      </>
    ),
  };

  const handleClick = (footerId) => {
    setActiveFooter(activeFooter === footerId ? null : footerId);
  };

  return (
    <div
      className={`main_div_mobile_application ${
        activeFooter ? `bg_${activeFooter}` : ""
      }`}
    >
      <div className="content_div">
        {activeFooter ? content[activeFooter] : <h1>Default Content</h1>}
      </div>

      <div className="footer_div_multicomponents">
        <div
          className={`text_1_footer ${
            activeFooter === 1 ? "background-image" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <h3 className="heading_click_me">MOBILEAPPLICATION</h3>
        </div>
        <div
          className={`text_2_footer ${
            activeFooter === 2 ? "background-image" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <h3 className="heading_click_me">WEBAPPLICATION</h3>
        </div>
        <div
          className={`text_3_footer ${
            activeFooter === 3 ? "background-image" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <h3 className="heading_click_me">JIGSAWKIOSK</h3>
        </div>
        <div
          className={`text_4_footer ${
            activeFooter === 4 ? "background-image" : ""
          }`}
          onClick={() => handleClick(4)}
        >
          <h3 className="heading_click_me">DRIVETHRU</h3>
        </div>
        <div
          className={`text_5_footer ${
            activeFooter === 5 ? "background-image" : ""
          }`}
          onClick={() => handleClick(5)}
        >
          <h3 className="heading_click_me">DIGITALMENU</h3>
        </div>
        <div
          className={`text_6_footer ${
            activeFooter === 6 ? "background-image" : ""
          }`}
          onClick={() => handleClick(6)}
        >
          <h3 className="heading_click_me">CRM&COS</h3>
        </div>
        <div
          className={`text_7_footer ${
            activeFooter === 7 ? "background-image" : ""
          }`}
          onClick={() => handleClick(7)}
        >
          <h3 className="heading_click_me">SCANTOORDER</h3>
        </div>
        <div
          className={`text_8_footer ${
            activeFooter === 8 ? "background-image" : ""
          }`}
          onClick={() => handleClick(8)}
        >
          <h3 className="heading_click_me">LOYALTYSYSTEM</h3>
        </div>
      </div>
    </div>
  );
};

export default MobileApplication;
