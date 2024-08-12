import React from "react";
import "./Hero.css";
import hand_icon from "../Assest/hand_icon.png";
import arror_icon from "../Assest/arrow.png";
import hero_img from "../Assest/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>New Arrival Only</h2>
        <div>
          <div className="hero_hand_icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>

        <div className="hero_latest_button">
          <div>Latest Collection </div>
          <img src={arror_icon} alt="" />
        </div>
      </div>

      <div className="hero_right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
