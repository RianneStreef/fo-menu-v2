import React from "react";

const DishDescription = (props) => {
  let menuItem = props;

  console.log(menuItem.menuItem.vegan);
  return (
    <>
      <div key={menuItem.menuItem.index} className="menu-item-container">
        <div className="menu-item">
          <div className="menu-item-description">
            <p className="item-name">
              {menuItem.menuItem.name}

              {menuItem.menuItem.vegan === true ? (
                <span className="vegan">V</span>
              ) : null}
            </p>
            {menuItem.menuItem.frenchDescription ? (
              <p>{menuItem.menuItem.frenchDescription}</p>
            ) : null}
            {menuItem.menuItem.englishDescription ? (
              <p>
                <i>{menuItem.menuItem.englishDescription}</i>
              </p>
            ) : null}
            {menuItem.menuItem.suppPrice1Title ? (
              <p className="sup-price">
                {menuItem.menuItem.suppPrice1Title}:{" "}
                {menuItem.menuItem.suppPrice1} €
              </p>
            ) : null}
            {menuItem.menuItem.suppPrice2Title ? (
              <p className="sup-price">
                {menuItem.menuItem.suppPrice2Title}:{" "}
                {menuItem.menuItem.suppPrice2} €
              </p>
            ) : null}
          </div>
          <span className="price">
            {menuItem.menuItem.price.toFixed(2)}€{" "}
            {menuItem.menuItem.price2 ? (
              <> / {menuItem.menuItem.price2.toFixed(2)}€</>
            ) : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default DishDescription;
