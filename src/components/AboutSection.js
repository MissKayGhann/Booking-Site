import React from "react";
import kareen from "../images/kareen.jpg";
import background from "../images/background.png";

const AboutSection = () => {
  const aboutStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundImage: `url(${background}`,
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
        <span>
          <h2 className="artist">The Artist Behind </h2>
        </span>
        <h2 className="brush">The Brush</h2>
        <p className="about-me">
          Hey! I'm Kareen! I'm a makeup artist based in East London . I
          specialise special event makeup, shoot and bridal. I also offer 1-2-1
          sessions. If you're looking for more details about my services, feel
          free to contact me!
        </p>
      </div>
      <img style={imageStyle} src={kareen} alt="About Kareen" />
    </div>
  );
};

export default AboutSection;
