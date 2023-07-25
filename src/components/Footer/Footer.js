import React from "react";
import "./Footer.css";
import sairam_logo from "../../static/sairam-logo.png";
import FaceBookSVG from "../../static/social/Facebook.svg";
import InstagramSVG from "../../static/social/Instagram.svg";
import LinkedInSVG from "../../static/social/LinkedIn.svg";

export default function Footer() {
  return (
    <div className="footer_div">
      <div className="footer_logo">
        <a referrerPolicy="no-referrer" target="_blank" href="https://sairam.edu.in/">
        <img src={sairam_logo} alt="logo" />
        </a>
        <div
          style={{ height: "50px", backgroundColor: "white", width: "2px" }}
        />
        <div className="text">
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
        </div>
      </div>
      <div className="footer_social">
      <a referrerPolicy="no-referrer" target="_blank" href="https://www.facebook.com/SairamEnggCSE">
        <div className="footer_social_icon">
          <img src={FaceBookSVG} alt="facebook social" />
        </div>
        </a>
        <a referrerPolicy="no-referrer" target="_blank" href="https://www.instagram.com/sairamcsechennai/">
        <div className="footer_social_icon">
          <img src={InstagramSVG} alt="instagram social" />
        </div>
        </a>
        <a referrerPolicy="no-referrer" target="_blank" href="https://www.linkedin.com/school/sri-sairam-engineering-college/">
        <div className="footer_social_icon">
          <img src={LinkedInSVG} alt="linkedin social" />
        </div>
        </a>
      </div>
    </div>
  );
}
