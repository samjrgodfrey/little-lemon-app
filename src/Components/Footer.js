import React from "react";
import ReactDOM from "react-dom";
import icon from "../img/lemon-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <img src={icon} alt="Little Lemon icon" width={38} />
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
        <li>
          <a href="#">Order</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
      </ul>
      <ul>
        <li className="social-icon">
          <a
            href="https://facebook.com"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://instagram.com"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </li>
        <li className="social-icon">
          <a
            href="mailto:hello@littlelemonchicago.com"
            rel="noopener noreferrer"
            title="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </li>
        <li className="social-icon">
          <a href="tel:312-555-9876" rel="noopener noreferrer" title="Phone">
            <FontAwesomeIcon icon={faPhone} size="xl" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            Little Lemon <br /> 1234 S. Mediterranean Ave. <br /> Chicago, IL
            60615
          </p>
        </li>
        <li>
          <p>
            Contact: <br /> (312) 555-9876 <br /> hello@littlelemonchicago.com
          </p>
        </li>
      </ul>
    </footer>
  );
}
