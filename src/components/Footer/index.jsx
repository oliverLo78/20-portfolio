import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-background">
      <ul className="footer-container">
        <li className="footer-li">
          <a
            href="https://github.com/oliverLo78"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fa-brands fa-github" />
          </a>
        </li>

        <li className="footer-li">
          <a
            href="https://www.linkedin.com/in/oliver-lopez78/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
        </li>

        <li className="footer-li">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
          >
            <i className="fa-brands fa-twitter" />
          </a>
        </li>
      </ul>

      <div className="footer-email">
        <i className="fa-solid fa-envelope" />
        <a href="mailto:oliverberto@gmail.com">
          oliverberto@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
