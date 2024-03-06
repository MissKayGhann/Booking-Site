import React, { useState } from "react";
import { Link } from "react-router-dom";
import mskayglam from "../images/mskayglam.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navlink">
      <Link to="/">
        <img src={mskayglam} />
      </Link>
      <div className="burger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>
      <div className={`navlinks ${open ? "open" : ""}`}>
        <Link
          className="navlink"
          to="/portfolio"
          onClick={() => setOpen(false)}
        >
          Portfolio
        </Link>
        <Link className="navlink" to="/services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link className="navlink" to="/terms" onClick={() => setOpen(false)}>
          Terms
        </Link>

        <Link
          className="navlink"
          to="/booking"
          style={{
            backgroundColor: "#ff7f50",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
          onClick={() => setOpen(false)}
        >
          BOOK NOW
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
