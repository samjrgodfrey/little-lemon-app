import React from "react";
import heroImg from "../img/hero-img.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <img
          src={heroImg}
          className="hero-img"
          alt="Chef holding platter of Bruschetta"
        />
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Welcome to Little Lemon, a charming slice of the Mediterranean in
            the heart of Chicago. We bring you fresh, vibrant flavors with every
            dish, from our crisp Greek salads to mouthwatering bruschetta and
            flavorful chicken wraps. Whether you're stopping by for a quick bite
            or settling in for a relaxed meal, Little Lemon is your go-to spot
            for delicious, wholesome comfort food. Come savor the taste of
            sunshine, one bite at a time!
          </p>
          <a href="#" className="hero-btn">
            Reserve a table
          </a>
        </div>
      </div>
    </div>
  );
}
