import React from "react";

import "../styles/menu.css";

import Nav from "../components/Nav";

import { menu } from "../content/menu";

const Midi = () => {
  const entrees = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Entrees")
    .filter((menuItems) => menuItems.menuMidi === true)
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const antipasti = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Antipasti")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const soupes = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Soupes")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const pates = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Pates")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const viandes = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Viande")
    .filter((menuItems) => menuItems.menuMidi === true)
    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const poissons = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Poissons")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const traditionnel = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Traditionnel")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const pizzas = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Pizza")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const kids = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Kids")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const focaccias = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Focaccias")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  const desserts = menu
    .filter((categoryItem) => categoryItem.categoryFrench === "Desserts")
    .filter((menuItems) => menuItems.menuMidi === true)

    .map((menuItem) => {
      return (
        <div key={menuItem.index} className="menu-item-container">
          <div className="menu-item">
            <div className="menu-item-description">
              <p className="item-name">{menuItem.name} </p>
              {menuItem.frenchDescription ? (
                <p>{menuItem.frenchDescription}</p>
              ) : null}
              {menuItem.englishDescription ? (
                <p>
                  <i>{menuItem.englishDescription}</i>
                </p>
              ) : null}
            </div>

            <span className="price">{menuItem.price.toFixed(2)}€</span>
          </div>
        </div>
      );
    });

  return (
    <div className="menu">
      <Nav />
      <div className="header-placeholder" />
      <h4 className="menu-category">
        Salades Entrées{" "}
        <span className="english-menu-title">Salads - Starters</span>
      </h4>
      {entrees}
      <h4 className="menu-category">Antipasti</h4>
      {antipasti}
      <h4 className="menu-category">
        Soupes <span className="english-menu-title">Soups</span>
      </h4>
      {soupes}
      <h4 className="menu-category">
        Pâtes Fraîches <span className="english-menu-title">Fresh Pasta</span>
      </h4>
      {pates}
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
      <h4 className="menu-category">Plats Enfants</h4>
      {kids}
      <h4 className="menu-category">Desserts</h4>
      {desserts}
    </div>
  );
};

export default Midi;
