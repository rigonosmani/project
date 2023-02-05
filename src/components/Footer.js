import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Copyright © Your Company Name</p>
      <div className="social-media">
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://twitter.com/">Twitter</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </div>
      <p>
        Contact us:{" "}
        <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
      </p>
    </div>
  );
}

export default Footer;
