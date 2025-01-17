import React from "react";
import logo from "../img/logo.png";

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon logo" />
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
    </nav>
  );
}
