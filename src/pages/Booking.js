import React from "react";
import background from "../images/background.png";

const bookingStyle = {
  paddingTop: "60px",
  backgroundImage: `url(${background}`,
};

const BookingPage = () => {
  const schedulingApp = `
    <iframe src="https://app.acuityscheduling.com/schedule.php?owner=31592904" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
    <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>`;

  return (
    <div style={bookingStyle}>
      <div className="welcome page-title">
        <h3>Booking</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: schedulingApp }} />
    </div>
  );
};

export default BookingPage;
