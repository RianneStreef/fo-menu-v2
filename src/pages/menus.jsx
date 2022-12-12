import React, { useState, useEffect } from "react";

import "../styles/menus.css";

import logo from "../images/icon.png";
import house from "../images/house.png";

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
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const soupes = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Soupes")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const plats = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Plats")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const pates = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Pates")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const snack = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Snack")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const viandes = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Viandes")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const poissons = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Poissons")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const trad = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Trad")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const pizzas = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Pizza")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const focaccias = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Focaccias")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const kids = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Enfants")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const desserts = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Desserts")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const crepes = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Crepes")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  const glaces = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Glaces")
    .filter((menuItems) => menuItems[key] === true)
    .map((menuItem) => {
      return <DishDescription menuItem={menuItem} key={menuItem.index} />;
    });

  return (
    <>
      {!showMenu ? (
        <div className="menu-choice">
          <div className="logo-container">
            <img src={logo} alt="" className="logo" /> <h2>vous propose</h2>
          </div>
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
            <a
              href="https://lafaceouest.com/"
              className="menu-button homepage-button"
            >
              <p className="homepage-p">Retour</p>

              <img src={house} alt="homepage" className="house-icon" />
            </a>
          </div>
        </div>
      ) : (
        <div className="menu">
          <Nav setShowMenu={setShowMenu} />
          <div className="header-placeholder" />
          {menuChoice === "menuMidi" ||
          menuChoice === "menuContinue" ||
          menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Salades Entrées{" "}
                <span className="english-menu-title">Salads - Starters</span>
              </h4>
              {entrees}
            </>
          ) : null}
          {menuChoice === "menuMidi" || menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">Antipasti</h4> {antipasti}
            </>
          ) : null}

          {menuChoice === "menuMidi" ||
          menuChoice === "menuContinue" ||
          menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Soupes <span className="english-menu-title">Soups</span>
              </h4>
              {soupes}
            </>
          ) : null}

          {menuChoice === "menuContinue" ? (
            <>
              <h4 className="menu-category">Plats</h4> {plats}
            </>
          ) : null}
          {menuChoice === "menuMidi" || menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Pâtes Fraîches{" "}
                <span className="english-menu-title">Fresh Pasta</span>
              </h4>
              {pates}
            </>
          ) : null}
          {menuChoice === "menuContinue" ? (
            <>
              <h4 className="menu-category">Snacking</h4> {snack}
            </>
          ) : null}
          {menuChoice === "menuMidi" || menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Viandes <span className="english-menu-title">Meat</span>
              </h4>
              {viandes}{" "}
            </>
          ) : null}
          {menuChoice === "menuMidi" || menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Poissons <span className="english-menu-title">Fish</span>
              </h4>
              {poissons}
            </>
          ) : null}
          {menuChoice === "menuMidi" || menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Plats Traditionnels{" "}
                <span className="english-menu-title">Traditional Dishes</span>
              </h4>
              {trad}
            </>
          ) : null}

          {menuChoice === "menuMidi" ||
          menuChoice === "menuContinue" ||
          menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">Pizzas</h4>
              {pizzas}
              <h4 className="menu-category">Focaccias</h4>
              {focaccias}
            </>
          ) : null}

          {menuChoice === "Midi" ? (
            <>
              <h4 className="menu-category">Plats Enfants</h4>
              {kids}
            </>
          ) : null}

          {menuChoice === "menuMidi" ||
          menuChoice === "menuContinue" ||
          menuChoice === "menuSoir" ? (
            <>
              <h4 className="menu-category">
                Desserts <span className="english-menu-title">Desserts</span>
              </h4>
              {desserts}
            </>
          ) : null}
          {menuChoice === "menuContinue" ? (
            <>
              <h4 className="menu-category">
                Crêpes{" "}
                <span className="english-menu-title">
                  Tout les jours de 8h à 19h
                </span>
              </h4>{" "}
              {crepes}
              <h4 className="menu-category">
                Glaces <span className="english-menu-title">Ice Cream</span>
              </h4>{" "}
              {glaces}
              <p className="item-name">Parfums glaces: </p>
              <p>Vanille, chocolat, pistache, café</p>
              <p className="item-name">Parfums sorbets: </p>{" "}
              <p>Fraise, cassis, citron vert</p>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Menus;
