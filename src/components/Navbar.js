// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    margin: "0 10px",
  };
  return (
    <nav style={navStyle}>
      <Link to="/" style={{ ...linkStyle, fontSize: "24px" }}>
        Ms Kay Glam
      </Link>
      <div>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/services" style={linkStyle}>
          Services
        </Link>
        <Link to="/terms" style={linkStyle}>
          Terms
        </Link>

        <Link
          to="/booking"
          style={{
            ...linkStyle,
            backgroundColor: "#ff7f50",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          BOOK NOW
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// className="nav-item"
//             to="/"
//             style={{ textDecoration: "none", color: "inherit" }}
