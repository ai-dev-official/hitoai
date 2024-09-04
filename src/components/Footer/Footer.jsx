import React from "react";
import LogoImage from "../../assets/images/homeimg.jpg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__logo">
            <img src={LogoImage} alt="" />
          </div>

          <div className="footer__nav">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="/services">Energy</a>
              </li>
              <li>
                <a href="/services">Finance</a>
              </li>
              <li>
                <a href="/services">Technology</a>
              </li>

            </ul>
          </div>

          <div className="footer__nav">
            <h3>About</h3>
            <ul>
              <li>
                <a href="/about">Mission</a>
              </li>
              <li>
                <a href="/about">Vision</a>
              </li>
              <li>
                <a href="/about">Values</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav">
            <h3>Follow Us</h3>

            <div className="footer__social">
              <a href="#">
                <img src="images/FacebookLogo.png" alt="" />
              </a>

              <a href="#">
                <img src="images/InstagramLogo.png" alt="" />
              </a>

              <a href="#">
                <img src="images/TwitterLogo.png" alt="" />
              </a>
            </div>

            <p>info@hitoai.com</p>
          </div>
        </div>
      </div>

      <p className="copyright">&copy;Copyright 2024 HITOAI, All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
