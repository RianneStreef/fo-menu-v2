import React from "react";
import { Link } from "gatsby";

import "../styles/menus.css";

import logo from "../images/logo-white.png";
import back from "../images/homepage.png";

const menus = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <a href="https://lafaceouest.com">
          <img src={back} alt="Back to homepage" className="back-icon" />
        </a>
      </div>
      <h1>La Face Ouest</h1>
      <h2>Restaurant Val Thorens</h2>
      <h3>Nos cartes</h3>
      <div className="menu-buttons">
        <div className="menu-button">
          <Link to="/midi">
            <p>
              Carte <br />
              Midi
            </p>
          </Link>
        </div>
        <Link to="/continue">
          <div className="menu-button">
            <p>Carte Continue</p>
          </div>
        </Link>
        <Link to="/soir">
          <div className="menu-button">
            <p>
              Carte
              <br /> Soir
            </p>
          </div>
        </Link>
        <Link to="/boissons">
          <div className="menu-button">
            <p>Carte Boissons</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default menus;
