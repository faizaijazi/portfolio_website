import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Faiz Aijazi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Abour
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.behance.net/faizaijazi"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-behance"></i>
          </a>

          <a
            href="https://www.facebook.com/faiz.aijazi"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://twitter.com/FaizAijazi"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Faiz Aijazi. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
