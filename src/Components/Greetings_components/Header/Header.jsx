import React, { useEffect } from "react";
import "./Header.scss";
import Aos from "aos";

const Header = () => {
  useEffect(() => {
    Aos.init({ once: false });
    Aos.refresh(); // Har safar yangilash
  }, []);
  return (
    <div className="header">
      <div className="container">
        <div className="header-text" data-aos="zoom-in-right">
          <h1>
            Приветствую <br /> Вас!
          </h1>

          <p>
            На этой странице вы найдете материалы урока. Готовьте с
            удовольствием !
          </p>
          <a href="#katalog">
          <button>Каталог уроков</button>
          </a>
        </div>

        <div className="header-img" >
          <img src="Greetings/IMG_7557 копия 3 2 (1).png" alt="" data-aos="zoom-out-up" />
        </div>

        
      </div>
    </div>
    
  );
};

export default Header;
