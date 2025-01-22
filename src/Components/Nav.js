import React from "react";
import logo from "../img/logo.png";

export default function Nav() {
  return (
    <div className="container">
      <div className="navbar">
        <img src={logo} alt="Little Lemon logo" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
          <ul>
            <li id="nav-btns">
              <a href="#" className="nav-btn">
                Order Online
              </a>
            </li>
            <li id="nav-btns">
              <a href="#" className="nav-btn">
                Reservations
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
