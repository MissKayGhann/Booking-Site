import React from "react";
import alicia from "../images/alicia.png";

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url(${alicia}`,
    backgroundSize: "cover",
    height: "100vmin",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  };

  const headingStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: "3rem",
    paddingBottom: "18%",
    margin: 0,
  };

  return (
    <div style={heroStyle}>
      <p className="heading-style">
        Enhance your essence, <span className="hero">feel</span> the beauty
        within.
      </p>
    </div>
  );
};

export default HeroSection;
