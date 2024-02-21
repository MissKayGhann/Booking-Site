import React from "react";
import alicia from "../images/alicia.png";

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url(${alicia}`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    fontSize: "2em",
  };

  return (
    <div style={heroStyle}>
      <h1>Ms Kay Glam</h1>
      <p>Makeup made to feel good in</p>
    </div>
  );
};

export default HeroSection;
