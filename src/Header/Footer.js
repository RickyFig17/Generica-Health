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
      <Disclaimer />
    </footer>
  );
}

function Disclaimer() {
  const disclaim =
    "This is NOT an official medical website. This is a portfolio project to show a fictional product and should not be used for medical purposes. The creator of Generica Health is not responsible for any medical decisions you choose to make. ALWAYS consult with your healthcare provider for healthcare products that might benefit you and your loved ones.";
  return <p>{disclaim}</p>;
}

export default Footer;
