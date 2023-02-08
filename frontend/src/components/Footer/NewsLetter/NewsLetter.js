// import { ArrowForward } from "@mui/icons-material";
import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <h2>subscibe to our newsletter</h2>
      <p>
        Get a free subscription to our health and fitness tip and stay tuned to
        our latest offers
      </p>
      <form>
        <input type="text" placeholder="Enter your email address"></input>
        {/* <ArrowForward /> */}
      </form>
    </div>
  );
};

export default NewsLetter;
