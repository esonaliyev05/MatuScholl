import React from "react";
import "./AboutHeader.scss";

const AboutHeader = () => {
  return (
    <div className="AboutHeader">
      <div className="container">
        <div className="About-text">
          <h1>Видео-уроки</h1>

          <h3>Технологические карты</h3>
          <p>
            Технологические карты и <br /> проверенные рецепты тортов
          </p>
          <button>Каталог уроков</button>
          </div>

        <div className="About-img">
          <img src="About-pages/Group 565.png" alt="Massageimg" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;

