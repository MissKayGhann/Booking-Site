import React, { useState } from "react";

const BookingPage = () => {
  const schedulingApp = `
    <iframe src="https://app.acuityscheduling.com/schedule.php?owner=31592904" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
    <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>`;

  return (
    <>
      <h1>Booking Page</h1>
      <div dangerouslySetInnerHTML={{ __html: schedulingApp }} />
    </>
  );
};

export default BookingPage;
