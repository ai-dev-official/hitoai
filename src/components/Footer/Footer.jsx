import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="logo">
            <img src="images/Logo-Light.svg" alt="" />
          </div>

          <div className="footer__nav">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#">Mobile Development</a>
              </li>
              <li>
                <a href="#">Web App Development</a>
              </li>
              <li>
                <a href="#">Theme Development</a>
              </li>
              <li>
                <a href="#">SEO</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#">GT Web Design</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav">
            <h3>Get Social</h3>

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

            <p>info@gtcoding.net</p>
          </div>
        </div>
      </div>

      <p className="copyright">
        This website was designed by Godson T. &copy; 2020
      </p>
    </footer>
  );
};

export default Footer;
