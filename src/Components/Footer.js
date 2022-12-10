import React from "react";
import "../Styles/Footer.css";
import facebook from "../Images/icons/facebook.png";
import twitter from "../Images/icons/twitter.png";
import instagram from "../Images/icons/instagram.png";
import linkedin from "../Images/icons/linkedin.png";
import logo from "../Images/klassy-logo.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="left">
            <div className="icons">
              <a
                href="https://www.facebook.com/ShahnawazX786/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://twitter.com/TheShahnawaaz/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://www.instagram.com/theshahnawaaz/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/shahnawaz-hussain-442a72152/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="mid">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <p>
              &copy; Copyright KlassyCafe Co. <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
