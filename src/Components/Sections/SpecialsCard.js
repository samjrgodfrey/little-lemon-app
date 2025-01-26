import React from "react";

export default function SpecialsCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="A menu item" />
      <div className="card-details">
        <h4>
          {props.heading} &nbsp;&nbsp;&nbsp;&nbsp; ${props.price}
        </h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
