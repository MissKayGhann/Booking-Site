import React from "react";
import kareen from "../images/kareen.jpg";

const AboutSection = () => {
  const aboutStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#f8f8f8",
  };

  const textStyle = {
    flex: 1,
    paddingRight: "50px",
    color: "#333",
  };

  const imageStyle = {
    width: "50%",
    height: "auto",
  };

  return (
    <div style={aboutStyle}>
      <div style={textStyle}>
        <h2>The One Behind The Brush</h2>
        <p>
          Hey! I'm Kareen! I'm a makeup artist based in East London . I
          specialise mainly in beauty editorial, commercial and editorial
          brides. If you're looking for more details about my services, feel
          free to contact me!
        </p>
      </div>
      <img style={imageStyle} src={kareen} alt="About Kareen" />
    </div>
  );
};

export default AboutSection;
