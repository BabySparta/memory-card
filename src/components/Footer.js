import React from "react";
import githubImg from "../assets/github-mark.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="name">Made By: Brandon Young 2023</div>
      <a href="https://github.com/BabySparta/memory-card" className="ghLogo">
        <img src={githubImg} alt="git hub" className="ghImg" />
      </a>
    </div>
  );
};

export default Footer;
