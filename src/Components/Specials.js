import React from "react";
import SpecialsCard from "./SpecialsCard";
import bruschetta from "../img/bruschetta.png";
import greekSalad from "../img/greek-salad.png";
import lemonDessert from "../img/lemon-dessert.png";

export default function Specials() {
  return (
    <div className="specials-container">
      <h1>Our Special Dishes</h1>
      <p>
        Craving something new? Check out our Specials section for today’s
        <br />
        handpicked creations!
      </p>
      <a href="#" className="nav-btn">
        Order Online
      </a>
      <div className="card-container">
        <SpecialsCard
          img={greekSalad}
          heading="Greek Salad"
          price="20.95"
          desc="Cucumbers, tomatoes, olives, red onions and feta all tossed in a tangy olive oil dressing!"
        />
        <SpecialsCard
          img={bruschetta}
          heading="Bruschetta"
          price="12.95"
          desc="Toasted bread topped with ripe tomatoes, basil, garlic and a drizzle of balsamic glaze."
        />
        <SpecialsCard
          img={lemonDessert}
          heading="Lemon Dessert"
          price="14.50"
          desc="A creamy, tangy cheesecake with a zesty lemon kick, topped with light citrus."
        />
      </div>
    </div>
  );
}
