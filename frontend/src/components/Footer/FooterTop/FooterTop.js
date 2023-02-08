import React from "react";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <footer className="footer-top">
      <div className="footer-logo">
        <img
          src="https://i.ibb.co/NWsbPKn/CANDIAN-PHARMACY-1.png"
          alt="logo"
          className="footer-img"
        />
      </div>
      <div className="footer-desc">
        <p>
          {" "}
          Canadian Pharmacy, is one of Canada’s most trusted pharmacies, with
          over 100 years’ experience in dispensing quality medicines.
        </p>
      </div>
    </footer>
  );
};

export default FooterTop;
