import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <p>
        &copy; {new Date().getFullYear()} Generica Health. All rights reserved.
      </p>
      <nav>
        <ul className="footer-nav">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
