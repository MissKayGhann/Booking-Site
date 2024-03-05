import React from "react";
import background from "../images/background.png";

const aboutStyle = {
  backgroundImage: `url(${background}`,
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  paddingTop: "60px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 100,
  fontStyle: "normal",
  color: "#76614b",
  fontSize: "32px",
};

const AboutPage = () => {
  return (
    <div style={aboutStyle}>
      <div className="welcome page-title">
        <h3>About Me</h3>
      </div>
    </div>
  );
};

export default AboutPage;
