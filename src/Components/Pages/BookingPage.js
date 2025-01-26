import { React, useState, useReducer } from "react";
import BookingForm from "../BookingForm";
import { fetchAPI } from "../../BookingsAPI";

export default function BookingPage() {
  const output = fetchAPI(new Date());
  const [availableTimes, setAvailableTimes] = useState(output);

  function updateTimes(date) {
    return setAvailableTimes(fetchAPI(new Date(date)));
  }

  return (
    <main id="booking-container">
      <h1>Make a Reservation</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </main>
  );
}
