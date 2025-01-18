import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-text">
            <h1>Matu <br /> school</h1>
            <p>
              Научись готовить самые вкусные, натуральные и разнообразные
              десерты!
            </p>
            <button>Каталог уроков</button>
          </div>

          <div className="header-img">
            <img src="Header-bacroun/c6ad46cab7671279612e443410a9a62e.png" alt="massage" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
