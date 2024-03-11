import React, { useState } from "react";
import background from "../images/background.png";

const termStyle = {
  paddingTop: "60px",
  backgroundImage: `url(${background}`,
  // fontFamily: "'Poppins', sans-serif",
  // fontWeight: 200,
  // fontStyle: "normal",
  color: "#76614b",
};

const TermsPage = () => {
  const [isPricesVisible, setPricesVisible] = useState(false);
  const [isTravelVisible, setTravelVisible] = useState(false);
  const [isLatenessVisible, setLatenessVisible] = useState(false);
  const [isSicknessVisible, setSicknessVisible] = useState(false);
  const [isCancellationVisible, setCancellationVisible] = useState(false);
  const [isGroomingVisible, setGroomingVisible] = useState(false);
  const [isPicturesVisible, setPicturesVisible] = useState(false);

  const renderSubTitle = (title, isVisible, toggleVisibility) => (
    <h2
      className="sub-title"
      style={{ cursor: "pointer", color: isVisible ? "#3e251e" : "inherit" }}
      onClick={toggleVisibility}
    >
      {title}
      {isVisible ? " - " : " + "}
    </h2>
  );

  return (
    <div style={termStyle}>
      <div className="terms-cond">
        <h3 className="page-title">Terms and Conditions</h3>
        <p className="please-read">PLEASE READ ALL INFORMATION</p>
        <p className="please-read">CAREFULLY BEFORE BOOKING</p>
        <p className="please-read">
          Thank you for considering to book with Ms Kay Glam, I'm grateful and
          can't
        </p>
        <p className="please-read">
          wait to work with you. I really hope this becomes one of many bookings
        </p>
      </div>

      <section>
        {renderSubTitle("Prices & Payment", isPricesVisible, () =>
          setPricesVisible(!isPricesVisible)
        )}
        {isPricesVisible && (
          <ul>
            <li>
              All prices are for bookings made in 2023 and first quarter of
              2024.
            </li>
            <li>
              A non-refundable retainer of 50% is required and must be paid
              through bank transfer for the booking to be confirmed. If you
              decide you no longer want to go ahead with the booking, there is a
              grace period of 3DAYS.
            </li>
            <li>
              The remaining balance for non bridal / bridesmaid bookings must be
              paid 24HRs before the booking and bridal / bridesmaid bookings
              will be 1Week before the event.
            </li>
            <li>All payments are via bank transfer</li>
          </ul>
        )}
        {renderSubTitle("UK / International Travel", isTravelVisible, () =>
          setTravelVisible(!isTravelVisible)
        )}
        {isTravelVisible && (
          <ul>
            <li>
              I charge a travel fee for all home bookings, this is listed as an
              add on, on the booking page. Travel from my base that exceeds a 2
              hour drive will need to be discussed seperately.
            </li>
            <li>All other bookings are take place in Leyton, East London.</li>
            <li>
              For international bookings, please note that I will require fully
              paid direct return flights from Heathrow or London City Airport.
              4* minimum accommodation with breakfast and transport between the
              airport, hotel and venue will need to be provided.
            </li>
            <li>
              Checkout time from hotel must be a maximum of 2HRs from pick up
              time on the departure day.
            </li>
            <li>
              Accommodation close to the the event venue may be required the
              night before the event if the journey time exceeds 2HRs one way or
              the start time is 6AM or earlier (also if there are any other
              foreseeable events/delays).
            </li>
            <li>
              For any additional days, £100 is required for each day that I am
              in the destination country but not including any services
              provided.
            </li>
            <li>
              All COVID-19 tests needed for me and any other persons assisting
              me during the international booking must be paid for by yourself
              (This includes ad Day 5 test-to-release PCR test).
            </li>
          </ul>
        )}
        {renderSubTitle("Lateness", isLatenessVisible, () =>
          setLatenessVisible(!isLatenessVisible)
        )}
        {isLatenessVisible && (
          <ul>
            <li>
              If you are running late for any reason, please contact me as soon
              as possible.
            </li>
            <li>
              If you are 15 minutes late, please be advised there will a £10
              late fee which must be paid on arrival. If you are 20 minutes
              late, you run the risk of your booking being cancelled and payment
              being forfeited.
            </li>
          </ul>
        )}
        {renderSubTitle("Sickness", isSicknessVisible, () =>
          setSicknessVisible(!isSicknessVisible)
        )}
        {isSicknessVisible && (
          <ul>
            <li>
              If you or those booking under your name have any COVID-19/Flu
              symptoms or feel sick (e.g coughing, sneezing, vomiting etc. not
              including hay fever/allergies) please refrain from booking until
              you/they are fully recovered. If you notice the symptoms after
              confirming the booking, please notify me ASAP so we can reschedule
              within the next month.
            </li>
            <li>
              If you come to the booking showing these symptoms without
              informing me I will have to cancel the booking and your retainer
              won ’t be refunded. You will need to book again once fully
              recovered.
            </li>
          </ul>
        )}
        {renderSubTitle(
          "Cancellations / Reschudiling",
          isCancellationVisible,
          () => setCancellationVisible(!isCancellationVisible)
        )}
        {isCancellationVisible && (
          <ul>
            <li>
              If you decide to cancel/reschedule your event after the 3 day
              grace period the retainer remains non-refundable. • Due to the
              uncertainty regarding COVID-19, please note that you are booking
              at your own risk and retainers remain non- refundable/transferable
              after 3 days grace period. All rescheduled
            </li>
            <li>
              All rescheduled bookings due to Government enforced lockdown are
              subject to availability. In the event that I am not available, the
              retainer remains non-refundable. For STANDARD BOOKINGS clients can
              only reschedule within the year, and for BRIDAL BOOKINGS clients
              may reschedule within the year or the following year.
            </li>
            <li>
              Please notify me of any changes with the time slots, location or
              number of clients for the booking at least 3 days before the
              appointment, if not the retainer remains non-refundable if I am
              unable to attend due to the changes.
            </li>
            <li>
              If I am unable to perform my services for any personal reason, the
              retainer will be fully refunded within 3 days.
            </li>
          </ul>
        )}
        {renderSubTitle("Grooming & Allergies", isGroomingVisible, () =>
          setGroomingVisible(!isGroomingVisible)
        )}
        {isGroomingVisible && (
          <ul>
            <li>
              Please ensure that all unwanted facial hair has been removed and
              your brows are groomed (to your preference) before the booking for
              a clean finish.
            </li>
            <li>
              If there are any brands, products or ingredients that you or
              anyone booked under your name are allergic to, please notify me
              when booking to avoid any reactions.
            </li>
            <li>
              If you are coming to my studio, please let me know if you have
              allergies or are scared of dogs.
            </li>
          </ul>
        )}
        {renderSubTitle("Pictures & Videos", isPicturesVisible, () =>
          setPicturesVisible(!isPicturesVisible)
        )}
        {isPicturesVisible && (
          <ul>
            <li>
              Pictures and videos may be taken during and after the service is
              complete. These images may be uploaded onto my social media pages
              for content/promotional purposes. If you wish to not have any
              images taken or just uploaded, please inform me before the service
              begins.
            </li>
          </ul>
        )}
      </section>

      <div className="bottom-text">
        <p className="no-kids">NO KIDS! NO PLUS ONES!</p>
        <p className="no-kids">
          Booking an appointment with MissKayGlam means you have agreed to my
          terms
        </p>
        <p className="no-kids">and conditions which MUST be adhered to.</p>
      </div>
    </div>
  );
};

export default TermsPage;
