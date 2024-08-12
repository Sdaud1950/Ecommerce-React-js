import React from "react";
import "./Footer.css";
import footer_logo from "../Assest/logo_big.png";
import instagram_icon from "../Assest/instagram_icon.png";
import pintester_icon from "../Assest/pintester_icon.png";
import whatsapp_icon from "../Assest/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <lu className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </lu>
      <div className="Footer-social-icon">
        <div className="icon_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="icon_container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="icon_container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright"></div>
      <hr />
      <p>Copyright @ 2024 - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
