import React from "react";
import "./main.scss";
import Swiper from "../../Home_components/Swiper/Swiper";
import { GoCheck } from "react-icons/go";
import SwiperAbour from "../../About_components/Swiper/SwiperAbout"

const Main = () => {
  return (
    <div className="Main-container">
      <div className="container">
        <div className="text-left">
          <h3>
            Вы можете купить все рецепты со скидкой 30%{" "}
            <span>за 39 000 сум</span>
          </h3>

          <button>приобрести и рецепты</button>
        </div>

        <div className="imegs">
          <img src="About-pages/IMG_0024_2 копия 1.png" alt="" />
        </div>

        <div className="text-right">
          <h3>
            Или вы можете купить все рецепты тортов со скидкой 30%{" "}
            <span>за 19 990</span>
          </h3>

          <button>приобрести и рецепты</button>
        </div>
      </div>

      <div className="Main-swiper">
        <div className="swiper-text">
          <h1>Ученики</h1>

          <h3>довольные результатом обучения</h3>
        </div>

        <Swiper />
      </div>

      <div className="main-reject">
        <div className="container-reject">
          <div className="text-top">
            <h3>Что входит в</h3>
            <h1>Рецепт</h1>
          </div>

          <div className="reject-parent">
            <div className="reject-text">
              <div className="box">
                <div className="icon">
                  {" "}
                  <GoCheck />{" "}
                </div>

                <p>
                  Купленные рецепты будут доступны в личном кабинете на сайте
                </p>
              </div>
              <div className="box">
                <div className="icon">
                  {" "}
                  <GoCheck />{" "}
                </div>

                <p>Технологические карты доступны к скачиванию</p>
              </div>
              <div className="box">
                <div className="icon">
                  {" "}
                  <GoCheck />{" "}
                </div>

                <p>Доступ к урокам бесспрочный </p>
              </div>
            </div>

            <div className="reject-img">
              <img src="About-control/ohlov.png" alt="" className="img-old" />
              <h3>
                Подробный <br />
                видеоурок
              </h3>
              <img src="About-control/prtret1.png" alt="" className="img-end" />
              <img src="About-control/parta1.png" alt="" className="bg-img" />
            </div>

            <div className="reject-big-img">
              <img src="About-control/blendir.png" alt="" className="old" />
              <img src="About-control/qozon.png" alt="" className="end" />

              <h1>
                Технологическая <br />
                карта
              </h1>

              <img
                src="About-control/pichoq.png"
                alt=""
                className="top-img-mini"
              />
              <img src="About-control/parta2.png" alt="" className="bg-img" />
            </div>

            <p className="text-reject">
              *точный состав урока вы найдете <br />в описании каждого рецепта
            </p>
          </div>
        </div>
      </div>

      {/* <Swiper/> */}
      <SwiperAbour/>

    </div>
  );
};

export default Main;
