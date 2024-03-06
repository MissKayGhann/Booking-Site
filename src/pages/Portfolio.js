import React from "react";
import background from "../images/background.png";
import aliciaC from "../images/aliciaC.png";
import aprilB from "../images/aprilB.png";
import bleO from "../images/bleO.png";
import clientOne from "../images/client1.png";
import kiKi from "../images/kiki.png";
import nayI from "../images/nayI.png";
// import vicG from "../images/vicG";
import vicMG from "../images/vicMG.png";

const PortfolioPage = () => {
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

  const images = [
    { id: 1, src: aliciaC, title: "Image 1" },
    { id: 2, src: aprilB, title: "Image 2" },
    { id: 3, src: bleO, title: "Image 3" },
    { id: 4, src: clientOne, title: "Image 4" },
    { id: 5, src: kiKi, title: "Image 5" },
    { id: 6, src: nayI, title: "Image 6" },
    // { id: 7, src: vicG, title: "Image 7" },
    { id: 8, src: vicMG, title: "Image 8" },
  ];

  return (
    <div style={aboutStyle}>
      <div className="welcome page-title">
        <h3>Portfolio</h3>
      </div>
      <section className="image-container">
        {images.map((image) => (
          <div key={image.id} className="image-container-img">
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;
