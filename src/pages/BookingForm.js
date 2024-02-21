import React, { useState } from "react";

function BookingForm({ onBook }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ name, date, time, service });
    setName("");
    setDate("");
    setTime("");
    setService("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Makeup Appointment</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Service:</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select a Service</option>
          <option value="basic-makeup">Basic Makeup</option>
          <option value="bridal-makeup">Bridal Makeup</option>
          <option value="fashion-makeup">Fashion Makeup</option>
        </select>
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookingForm;
