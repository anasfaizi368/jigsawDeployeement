import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/HeaderSection/header.jsx";
import Integrationsection from "../../components/integrationsection/integrationsection.jsx";
import LogoSlider from "../../components/LogosSlider/logoslider.jsx";
import MultipulCompoents from "../../components/multipulCpmonentsSection/mobileApplication/mobilrApplication.jsx";
import Navbar from "../../components/NavBar/navbar.jsx";
import Outstanding from "../../components/outstandingsection/outstanding.jsx";
import Testimonial from "../../components/testimonial/testimonial.jsx";

import "./home.css";
const Home=()=> {
  return (
    <>
      <Navbar />
      <div className="header_div">
        <Header
        // bg_video="./vid_2.mp4"
        />
      </div>
      <div className="logo_slider">
        <LogoSlider />
      </div>
      <MultipulCompoents />
      <Integrationsection />
      <Testimonial />
      <Outstanding 
      className="outstanding_div_1_image"
     section_1_image  ="./kiosk1.png"
     heading_1 = "Let’s make something"
     pharagraph = "Evaluate your business now with Jigsaw Solutions"
     changeWordList={["OUTSTANDING",
    "STRATEGIES",
    "INNOVATIVE",
    "ENGAGING"]}
      />
      <Footer />
    </>
  );
}

export default Home;
