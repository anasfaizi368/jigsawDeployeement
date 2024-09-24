import React, { useState } from "react";
import "./navbar.css";
import "../../container/globle.css";
import Logo from "../../../public/Jigsaw_logo.png";
import Products from "../navBarProdects/products";
import image1 from "../../../public/product_1.png";
import image2 from "../../../public/product_2.png";
import image3 from "../../../public/product_3.png";
import image4 from "../../../public/product_4.png";
import image5 from "../../../public/product_5.png";
import image6 from "../../../public/product_6.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [isproductopen, setisproductopen] = useState(false);
  const [isNewCenteropen, setIsNewCenteropen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProducts = () => {
    setisproductopen(!isproductopen);
    setIsNewCenteropen(false);
  };
  const toggleNewCentre = () => {
    setIsNewCenteropen(!isNewCenteropen);
    setisproductopen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav_bar_section">
     
      <div className="section_1_navbar">
        <img className="logo_style" src={Logo} alt="Logo" onClick={()=>navigate('/')} />
       
      </div>
      <div className={`section_2_navbar ${isMenuOpen ? "show-menu" : ""}`}>
      <div className="menu-item-dropdown"><span className="menu-item" onClick={()=>navigate('/about')} >About Us</span>    </div>
        <div className="menu-item-dropdown">
          <span className={isproductopen ? "Active_class" : "menu-item"}>
            Products
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={isproductopen ? "dropdown-icon-active" : "dropdown-icon"}
            onClick={toggleProducts}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          {isproductopen && (
            <div className="dropdown-menu-products">
              <div>
                <Products
                  image={image1}
                  className="div_3"
                  heading="Mobile Application"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
              <div>
                <Products
                  image={image2}
                  heading="Web Application"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
              <div>
                <Products
                  image={image3}
                  className="div_2"
                  heading="Self Service Kiosk"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
              <div>
                <Products
                  image={image4}
                  heading="Drive Thru"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
              <div>
                <Products
                  image={image5}
                  className="div_1"
                  heading="Digital Menu"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
              <div>
                <Products
                  image={image6}
                  className="div_3"
                  heading="CRM & COS"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
              <div>
                <Products
                  image={image3}
                  className="div_1"
                  heading="Scan To Order(QR ordering)"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
              <div>
                <Products
                  image={image4}
                  className="div_2"
                  heading="Loyalty System(AI Powerd)"
                  pharagraph=" potentially reducing to 2 or 1 column(s) depending on the available width, but they will always"
                />
              </div>
            </div>
          )}
        </div>
        <div className="menu-item-dropdown">  <span className="menu-item" onClick={()=>navigate('/feature')} >Features</span>        </div>
        <div className="menu-item-dropdown">
          <span className={isNewCenteropen ? "Active_class" : "menu-item"}>
            New Centre
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={isNewCenteropen ? "dropdown-icon-active" : "dropdown-icon"}
            onClick={toggleNewCentre}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          {isNewCenteropen && (
            <div className="dropdown-menu">
              <span className="dropdown-item">Blogs</span>
              <span className="dropdown-item">NewsLetters</span>
              <span className="dropdown-item">Campaigns</span>
            </div>
          )}
        </div>
        <div className="menu-item-dropdown">  <span className="menu-item">Contact Us</span>  </div>
      </div>
      <div className="section_3"> 
        <div className="menu-button" onClick={toggleMenu}>
          &#9776; 
        </div>
        </div>
    </div>
  );
};

export default Navbar;
