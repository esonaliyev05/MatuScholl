import React, { useEffect } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Aos from "aos";

const Header = () => {
  useEffect(() => {
    Aos.init({ once: false });
    Aos.refresh(); // Har safar yangilash
  }, []);
  return (
    <>
      <header>
        <div className="container">
          <div className="header-text">
            <h1
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              Matu <br /> school
            </h1>
            <p data-aos="fade-right">
              Научись готовить самые вкусные, натуральные и разнообразные
              десерты!
            </p>
            <NavLink to={"/about"}>

            <button data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              {" "}
              Каталог уроков
            </button>
            </NavLink>
          </div>

          <div
            className="header-img"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src="Header-bacroun/c6ad46cab7671279612e443410a9a62e.png"
              alt="massage"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
