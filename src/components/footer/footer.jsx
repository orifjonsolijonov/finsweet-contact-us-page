import { useState } from "react";
import Logo from "/src/assets/Logo.svg";
import facebook from "/src/assets/facebook.svg";
import twitter from "/src/assets/twitter.svg";
import instagram from "/src/assets/instagram.svg";
import linkedin from "/src/assets/linkedin.svg";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="left-content">
          <img src={Logo} alt="finsweet-logo" />
          <p>
            We are always open to discuss your project and improve your online
            presence.
          </p>
        </div>
        <div className="right-content">
          <h2>Lets Talk!</h2>
          <p>
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="social-icons">
            <a href="#"><img src={facebook} alt="facebook-icon" /></a>
            <a href="#"><img src={twitter} alt="twitter-icon" /></a>
            <a href="#"><img src={instagram} alt="instagram-icon" /></a>
            <a href="#"><img src={linkedin} alt="instagram-icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
