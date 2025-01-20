import React from "react";
// import Concat from "../Components/ConcatTols/Concat";
import "../Components/ConcatTols/Concat.scss"
import { NavLink } from "react-router-dom";

const Concat = () => {
  return (
    <>
      <div className="Concat-main">

       <div className="concat-logo">
        
        <NavLink to={"/"}>
            <img src="Nav-img/Mask group.png" alt="" />
        </NavLink>

       </div>

        <div className="container">

        </div>
      </div>
    </>
  );
};

export default Concat;
