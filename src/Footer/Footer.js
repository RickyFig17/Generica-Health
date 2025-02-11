import React from "react";
import "./Footer.scss";
import TextContent from "../Text.json";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <p>
        &copy; {new Date().getFullYear()}
        {TextContent.TextContent.Footer.copyRight}
      </p>
      <nav>
        <ul className="footer-nav">
          <li>
            <a href="/privacy">{TextContent.TextContent.Footer.privacy}</a>
          </li>
          <li>
            <a href="/terms">{TextContent.TextContent.Footer.terms}</a>
          </li>
        </ul>
      </nav>
      <Disclaimer />
    </footer>
  );
}

function Disclaimer() {
  return <p>{TextContent.TextContent.Footer.disclaimer}</p>;
}

export default Footer;
