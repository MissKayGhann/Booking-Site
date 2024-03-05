import React from "react";
import alicia from "../images/alicia.png";

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url(${alicia}`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    color: "white",
    textAlign: "center",

    paddingTop: "60px",
    fontFamily: "'Poppins', sans-serif",
  };

  const pStyle = {
    padding: 0,
    margin: 0,
  };

  const headingStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: "3rem",
    paddingBottom: "14rem",
    margin: 0,
  };

  return (
    <div style={heroStyle}>
      <p style={headingStyle}>
        Enhance your essence, <span className="hero">feel</span> the beauty
        within.
      </p>
    </div>
  );
};

export default HeroSection;
