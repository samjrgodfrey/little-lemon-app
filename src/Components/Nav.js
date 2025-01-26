import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Little Lemon logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <a href="#">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href="#">About</a>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <a href="#">Menu</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li id="nav-btns">
              <Link to="/menu">
                <a href="#" className="nav-btn">
                  Order Online
                </a>
              </Link>
            </li>
            <li id="nav-btns">
              <Link to="/reservations">
                <a href="#" className="nav-btn">
                  Reservations
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
