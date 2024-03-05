import React from "react";
import { Link } from "react-router-dom";
import mskayglam from "../images/mskayglam.png";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    leftt: 0,
    width: "100%",
    zIndex: 10,
    height: "60px",
    fontFamily: "'Poppins', sans-serif",
  };

  const linkStyle = {
    color: "#644f48",
    fontWeight: 400,
    margin: "0 10px",
    textDecoration: "none",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        <img src={mskayglam} />
      </Link>
      <div>
        <Link className="navlink" to="/about" style={linkStyle}>
          About
        </Link>
        <Link className="navlink" to="/services" style={linkStyle}>
          Services
        </Link>
        <Link className="navlink" to="/terms" style={linkStyle}>
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
