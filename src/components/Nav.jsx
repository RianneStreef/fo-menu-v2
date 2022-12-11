import React, { useEffect } from "react";

import "../styles/Nav.css";

import back from "../images/back.svg";
import homepage from "../images/icon.png";

const Nav = (props) => {
  let { setShowMenu } = props;
  useEffect(() => {
    const nav = document.getElementById("nav");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        nav.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
        nav.classList.remove(scrollUp);
        nav.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        nav.classList.contains(scrollDown)
      ) {
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  return (
    <nav className="nav scroll-up" id="nav">
      <img
        src={back}
        alt="back"
        className="back-icon"
        onClick={() => setShowMenu(false)}
      />
      <a href="https://lafaceouest.com/ ">
        <img src={homepage} alt="homepage" className="homepage-icon" />
      </a>
    </nav>
  );
};

export default Nav;
