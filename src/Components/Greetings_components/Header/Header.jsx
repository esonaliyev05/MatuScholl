import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-text">
          <h1>
            Приветствую <br /> Вас!
          </h1>

          <p>
            На этой странице вы найдете материалы урока. Готовьте с
            удовольствием !
          </p>
          <button>Каталог уроков</button>
        </div>

        <div className="header-img">
          <img src="Greetings/IMG_7557 копия 3 2 (1).png" alt="" />
        </div>

        
      </div>
    </div>
    
  );
};

export default Header;
