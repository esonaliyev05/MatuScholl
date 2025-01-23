import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-logo">
            <img src="Nav-img/Mask group.png" alt="logo" />
            <NavLink to={"/"}>
              Онлайн школа <br /> для кондитеров
            </NavLink>
          </div>

          <div className="nav-concat">
            <ul>
              <li>
                <NavLink to={"/"}>Акции</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>Отзывы</NavLink>
              </li>
              <li>
                <NavLink to={"/greetings"}>Техподдержка</NavLink>
              </li>
            </ul>

            <div className="nav-btn">
              <NavLink to={"/concat"}>
                <button>Личный кабинет</button>
              </NavLink>

              <div className="bars" onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose /> : <HiMiniBars3 />}
              </div>
            </div>
          </div>
        </div>

        <div className={open ? "Open activ" : "Open"}>

        <div className="nav-logo">
            <img src="Nav-img/Mask group.png" alt="logo" />
            <NavLink>
              Онлайн школа <br /> для кондитеров
            </NavLink>
          </div>
             
        <ul>
              <li onClick={() => setOpen(false)}>
                <NavLink to={"/"}>Акции</NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink to={"/about"}>Отзывы</NavLink>
              </li>
              <li onClick={() => setOpen(false)}>
                <NavLink to={"/greetings"}> Техподдержка</NavLink>
              </li>
            </ul>

        </div>
          
         
         
      </nav>
    </>
  );
};

export default Navbar;
