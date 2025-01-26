import React from "react";
import chefs from "../../img/adrian-mario.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="content">
          <h1>Adrian and Mario</h1>
          <p>
            Meet Adrian and Mario, the passionate duo behind Little Lemon! With
            a shared love for fresh, flavourful food and Mediterranean cuisine,
            they dreamed of creating a cozy spot where guests could enjoy
            wholesome meals made with care. Their vision is simple: serve great
            food, create lasting memories, and bring a little taste of sunshine
            to Chicago.
          </p>
        </div>
        <img src={chefs} className="about-img" alt="Adrian and Mario Smiling" />
      </div>
    </div>
  );
}
