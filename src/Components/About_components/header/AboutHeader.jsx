import React, { useEffect } from "react";
import "./AboutHeader.scss";
import Aos from "aos";

const AboutHeader = () => {
  useEffect(() => {
    Aos.init({ once: false });
    Aos.refresh(); // Har safar yangilash
  }, []);
  return (
    <div className="AboutHeader">
      <div className="container">
        <div className="About-text" data-aos="fade-up">
          <h1>Видео-уроки</h1>

          <h3>Технологические карты</h3>
          <p>
            Технологические карты и <br /> проверенные рецепты тортов
          </p>
          <button>Каталог уроков</button>
          </div>

        <div className="About-img" data-aos="fade-up-left">
          <img src="About-pages/Group 565.png" alt="Massageimg" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;

