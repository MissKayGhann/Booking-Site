import React, { useState } from "react";
import background from "../images/background.png";
import fancy from "../images/fancy.png";

const serviceStyle = {
  paddingTop: "60px",
  backgroundImage: `url(${background}`,
  color: "#76614b",
};

const Services = () => {
  const [isBrideVisible, setBrideVisible] = useState(false);
  const [isBridesmaidsVisible, setBridesmaidsVisible] = useState(false);
  const [isPackagesVisible, setPackagesVisible] = useState(false);
  const [isInternationalPackagesVisible, setInternationalPackagesVisible] =
    useState(false);

  const toggleBrideVisibility = () => setBrideVisible(!isBrideVisible);
  const toggleBridesmaidsVisibility = () =>
    setBridesmaidsVisible(!isBridesmaidsVisible);
  const togglePackagesVisibility = () => setPackagesVisible(!isPackagesVisible);
  const toggleInternationalPackagesVisibility = () =>
    setInternationalPackagesVisible(!isInternationalPackagesVisible);

  const renderSectionTitle = (title, isVisible) => (
    <button
      style={{
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        fontSize: "4rem",
        cursor: "pointer",
        color: isVisible ? "#3e251e" : "inherit",
        fontFamily: '"Themysion", sans-serif',
        marginLeft: "1rem",
        fontWeight: "100",
        marginBottom: "-2rem",
        marginTop: "1.5rem",
      }}
    >
      {title}
      {isVisible ? " - " : " + "}
    </button>
  );

  return (
    <div style={serviceStyle}>
      <div className="welcome page-title">
        <h3>Services</h3>
        <p className="tiny-text">
          (These are the bridal/wedding services I offer, please get in contact
          to speak in more depth on pricing)
        </p>
      </div>
      <section onClick={toggleBrideVisibility}>
        {renderSectionTitle("Bride", isBrideVisible)}
        {isBrideVisible && (
          <div className="packages">
            <h2 className="more-sub-title">Bridal Trial</h2>
            <h2 className="more-sub-title">Registry MakeUp</h2>
            <h2 className="more-sub-title">
              Wedding Day / Traditional Engagement
            </h2>
          </div>
        )}
      </section>
      <section onClick={toggleBridesmaidsVisibility}>
        {renderSectionTitle(
          "Bridesmaids / Additional Persons",
          isBridesmaidsVisible
        )}
        {isBridesmaidsVisible && (
          <div className="packages">
            <p className="maids-info">
              In my professional opinion, if you have a bridal party of more
              than 5, it is best to book more than one artist.{" "}
            </p>
            <p className="maids-infot">
              If you would like for me to make recommendations, please let me
              know know.
            </p>
            <p className="maids-info">
              For a group of 3, the rate will be reduced by 10%. For a group of
              5, the rate will be reduced by 15%
            </p>
          </div>
        )}
      </section>
      <section onClick={togglePackagesVisibility}>
        {renderSectionTitle("Packages", isPackagesVisible)}{" "}
        {isPackagesVisible && (
          <div className="packages">
            <h2 className="more-sub-title">BRONZE</h2>
            <p className="maids-discount">
              This includes Bridal Trial, Registry MakeUp and Traditional or
              Wedding Day MakeUp
            </p>
            <h2 className="more-sub-title">SILVER</h2>
            <p className="maids-discount">
              This includes Wedding Day or Traditional Engagement MakeUp (Plus
              4Hrs Touch Up)
            </p>
            <h2 className="more-sub-title">GOLD</h2>
            <p className="maids-discount">
              This includes Traditional Engagement or Wedding Day (Plus 8Hrs
              Touch Up and change of look){" "}
            </p>
            <h2 className="more-sub-title">PLATINUM</h2>
            <p className="maids-discount">
              This includes Bridal Trial, Traditional Engagement, Wedding Day,
              Mother of the Bride (Plus 4Hrs Touch Up){" "}
            </p>
            <h2 className="more-sub-title">PLATINUM PLUS+</h2>
            <p className="maids-discount">
              This includes Bridal Trial, Traditional Engagement, Wedding Day,
              Mother of the Bride (Plus 8Hrs Touch Up and change of look){" "}
            </p>
          </div>
        )}
      </section>
      <section onClick={toggleInternationalPackagesVisibility}>
        {renderSectionTitle(
          "International Packages",
          isInternationalPackagesVisible
        )}
        {isInternationalPackagesVisible && (
          <div className="packages">
            <h2 className="more-sub-title">Bridal Bundle</h2>
            <p className="maids-discount">
              This includes the GOLD PACKAGE for the Bride + 2 additional
              persons (Optional)
            </p>
            <h2 className="more-sub-title">Bridesmaid Bundle</h2>
            <p className="maids-discount">
              This includes up to 5 Bridesmaids/Additional Persons
            </p>
            <div className="fancy">
              <img src={fancy} />
              <p className="maids-discount">
                Touch ups begin after initial application
              </p>
              <p className="maids-discount">
                Additional time is charged at £35 per hour outside of the hours
                included in the package
              </p>
              <p className="maids-discount">
                Change of look includes; retouching base, eye look change and
                lip colour change
              </p>
              <p className="maids-discount">
                THIS APPLIES FOR INTERNATIONAL BOOKINGS
              </p>
              <img src={fancy} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
