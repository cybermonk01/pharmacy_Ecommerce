import React from "react";
import "./Footer.css";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterCenter from "./FooterCenter/FooterCenter";
import FooterTop from "./FooterTop/FooterTop";

const Footer = () => {
  return (
    <div className="footer">
      <FooterTop />
      <FooterCenter />
      <FooterBottom />
    </div>
  );
};

export default Footer;
