import React from "react";
import TestimonialCard from "./TestimonialCard";
import user1 from "../img/user1.png";
import user2 from "../img/user2.png";
import user3 from "../img/user3.png";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <h1>Testimonials</h1>
        <div className="card-container">
          <TestimonialCard
            img={user1}
            name="Christina"
            rating="★★★★★"
            desc="A cozy gem in Chicago, with vibrant flavors and top-notch service! My all-time favourite."
          />
          <TestimonialCard
            img={user2}
            name="Joseph"
            rating="★★★★"
            desc="Little Lemon brings a taste of the Mediterranean right to Chicago with style!"
          />
          <TestimonialCard
            img={user3}
            name="Annika"
            rating="★★★★★"
            desc="A must-visit for anyone craving fresh, flavorful Mediterranean fare! Do yourself a favour and visit!"
          />
        </div>
      </div>
    </div>
  );
}
