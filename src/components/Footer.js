import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  };

  const iconStyle = {
    margin: "0 5px",
  };

  return (
    <footer style={footerStyle}>
      <p>Ms Kay Glam © {new Date().getFullYear()}</p>
      <div>
        <a href="/booking-policies" style={linkStyle}>
          Booking Policies
        </a>{" "}
        |
        <a href="/privacy-policy" style={linkStyle}>
          Privacy Policy
        </a>
        <a href="https://tiktok.com/yourusername" style={linkStyle}>
          <FontAwesomeIcon icon={faTiktok} style={iconStyle} />
        </a>
        <a href="https://instagram.com/yourusername" style={linkStyle}>
          <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        </a>
        <a href="mailto:your@email.com" style={linkStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
