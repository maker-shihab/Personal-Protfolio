import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <p>
          Copyright © {new Date().getFullYear()} Shihab. All Rights Reserved.
        </p>
        <ul>
          <li>
            <Link to="/">Terms & Policy</Link>
          </li>
          <li>
            <Link to="/">Disclaimer</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
