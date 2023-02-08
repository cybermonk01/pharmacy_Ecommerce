import React from "react";
import LinkItems from "../LinkItems/LinkItems";
import NewsLetter from "../NewsLetter/NewsLetter";
import "./FooterCenter.css";

const FooterCenter = () => {
  return (
    <div className="footer-center">
      <div className="linkBar">
        <LinkItems />
      </div>
      {/* <div className="linkBar"><LinkItems /></div>
      <div className="linkBar"><LinkItems /></div> */}
      <div className="linkBar2">
        <NewsLetter />
      </div>
    </div>
  );
};

export default FooterCenter;
