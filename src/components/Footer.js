import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#644f48",
    color: "white",
    padding: "20px",
    textAlign: "center",
    marginBottom: "0",
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
      <p className="kay-glam">Ms Kay Glam © {new Date().getFullYear()}</p>
      <div>
        <Link to="/terms" style={linkStyle}>
          Booking Policies
        </Link>{" "}
        |
        <a
          target="_blank"
          href="https://tiktok.com/@misskayglam"
          style={linkStyle}
        >
          <FontAwesomeIcon icon={faTiktok} style={iconStyle} />
        </a>
        <a
          target="_blank"
          href="https://instagram.com/mskayglam"
          style={linkStyle}
        >
          <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        </a>
        <a
          target="_blank"
          href="mailto:misskayglam@outlook.com"
          style={linkStyle}
        >
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
