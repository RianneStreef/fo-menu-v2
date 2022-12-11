import React, { useState, useEffect } from "react";

import "../styles/menus.css";

import logo from "../images/logo-white.png";
import back from "../images/homepage.png";

import Nav from "../components/Nav";
import DishDescription from "../components/DishDescription";
import { menu } from "../content/menu";

const Menus = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuChoice, setMenuChoice] = useState("menuMidi");

  function handleMenuChoice(menu) {
    setMenuChoice(menu);
    setShowMenu(true);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    console.log(menuChoice);
  }, [menuChoice]);

  let key = menuChoice;

  const entrees = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Entrees")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const antipasti = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Antipasti")
    .filter((menuItems) => menuItems.menuMidi === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} />;
    });

  return (
    <>
      {!showMenu ? (
        <div className="menu-choice">
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
            <button
              onClick={() => handleMenuChoice("menuMidi")}
              className="menu-button"
            >
              <p>
                Carte <br />
                Midi
              </p>
            </button>
            <button
              onClick={() => handleMenuChoice("menuContinue")}
              className="menu-button"
            >
              <p>
                Carte <br />
                Continue
              </p>
            </button>
            <button
              onClick={() => handleMenuChoice("menuSoir")}
              className="menu-button"
            >
              <p>
                Carte
                <br /> Soir
              </p>
            </button>
            <button
              onClick={() => handleMenuChoice("menuBoissons")}
              className="menu-button"
            >
              <p>
                Carte <br /> Boissons
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="menu">
          <Nav setShowMenu={setShowMenu} />
          <div className="header-placeholder" />
          <h4 className="menu-category">
            Salades Entrées{" "}
            <span className="english-menu-title">Salads - Starters</span>
          </h4>
          {entrees}
          {menuChoice === "menuMidi" || menuChoice === "menuSoir"}
          <h4 className="menu-category">Antipasti</h4>
          {antipasti}
          {/* <h4 className="menu-category">
            Soupes <span className="english-menu-title">Soups</span>
          </h4>
          {soupes}
          {menuChoice === "menuMidi" || menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Pâtes Fraîches{" "}
                <span className="english-menu-title">Fresh Pasta</span>
              </h4>
              {pates}
            </>
          ) : null}
          <h4 className="menu-category">
            Viandes <span className="english-menu-title">Meat</span>
          </h4>
          {viandes}
          <h4 className="menu-category">
            Poissons <span className="english-menu-title">Fish</span>
          </h4>
          {poissons}
          <h4 className="menu-category">
            Plats Traditionnels{" "}
            <span className="english-menu-title">Traditional Dishes</span>
          </h4>
          {traditionnel}
          <h4 className="menu-category">Pizzas</h4>
          {pizzas}
          <h4 className="menu-category">Focaccias</h4>
          {focaccias}
          {menuChoice === "Midi" ? (
            <>
              <h4 className="menu-category">Plats Enfants</h4>
              <div>{kids}</div>
            </>
          ) : null}
          <h4 className="menu-category">Desserts</h4>
          {desserts} */}
        </div>
      )}
    </>
  );
};

export default Menus;
