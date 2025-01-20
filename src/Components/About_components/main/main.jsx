import React from "react";
import "./main.scss";
import Swiper from "../../Home_components/Swiper/Swiper"

const Main = () => {
  return (
    <div className="Main-container">
      <div className="container">
        <div className="text-left">
          <h3>Вы можете купить все рецепты со скидкой 30% <span>за 39 000 сум</span></h3>

          <button>приобрести и рецепты</button>
        </div>

        <div className="imegs">
          <img src="About-pages/IMG_0024_2 копия 1.png" alt="" />
        </div>

        <div className="text-right">
          <h3>
            Или вы можете купить все рецепты тортов со скидкой 30% <span>за 19 990</span>
          </h3>

          <button>приобрести и рецепты</button>
        </div>
      </div>

      
      <div className="Main-swiper">
              
              <div className="swiper-text">
                   
                   <h1>Ученики</h1>

                   <h3>довольные результатом обучения</h3>

              </div>
              
              <Swiper/>

      </div>



    </div>
  );
};

export default Main;
