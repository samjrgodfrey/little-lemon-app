import React from "react";

export default function TestimonialCard(props) {
  return (
    <div className="tcard">
      <div className="tcard-details">
        <div className="tcard-user">
          <img src={props.img} alt="A menu item" />
          <h5>
            {props.name} <br /> {props.rating}
          </h5>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
