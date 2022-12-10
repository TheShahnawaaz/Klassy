import React from "react";
import "../Styles/Navbar.css";
import logo from "../Images/klassy-logo.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <div id="navbar">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="logsdfvfdsasdfgo">
                </img>
          </Link>
        </div>
        <ul id="nav-option">
          <li className="item">
            <Link to="/home">Home</Link>
          </li>
          <li className="item">
            <Link to="/about">About</Link>
          </li>
          <li className="item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="item">
            <Link to="/chefs">Chefs</Link>
          </li>
          {/* <!-- <li className="item"><Link to="#features">Features</Link>+</li> --> */}
          <li className="item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
