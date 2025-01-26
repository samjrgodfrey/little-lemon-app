import React from "react";
import { useLocation } from "react-router-dom";

export default function Confirmation(props) {
  const location = useLocation();
  const data = location.state;

  const bookingDate = new Date(data.date).toDateString();

  return (
    <main id="booking-container">
      <h1>Booking Confirmed</h1>
      <p>Thanks for your booking. We look forward to see you soon!</p>
      <table>
        <tr>
          <th>Full Name:</th>
          <td>
            {data.fName} {data.lName}
          </td>
        </tr>
        <tr>
          <th>Date:</th>
          <td>{bookingDate}</td>
        </tr>
        <tr>
          <th>Time:</th>
          <td>{data.time}</td>
        </tr>
        <tr>
          <th>People:</th>
          <td>{data.people}</td>
        </tr>
        <tr>
          <th>Occasion:</th>
          <td>{data.occasion}</td>
        </tr>
        <tr>
          <th>Preferences:</th>
          <td>{data.preferences}</td>
        </tr>
        <tr>
          <th>Comments:</th>
          <td>{data.comments}</td>
        </tr>
      </table>
    </main>
  );
}
