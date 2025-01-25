import React from "react";
import { FaPlay } from "react-icons/fa";
import "./Main.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Main = () => {
  const handleDownload = () => {
    const data = "public/Greetings/IMG_7557 копия 3 2 (1).png"


    const blob = new Blob([data], { type: "text/plain" }); 
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "recept.pdf"; 
    a.click();

    window.URL.revokeObjectURL(url); 
    
  }
  return (
    <div className="Main">
      <div className="container">
        <div className="Main-section">
          <div className="section-old">
            <div className="text">
              <p>бисквитный торт</p>

              <h1>
                Красный бархат <br />с клубникой
              </h1>

              <p>
                Яркий, насыщенный, безумно <br />
                вкусный торт с клубникой
              </p>
            </div>

            <img src="Greetings/Rectangle 424.png" alt="" />
          </div>

          <div className="section-end">
            <img src="Greetings/Rectangle 425.png" alt="" />

            <div className="text">
              <h3>Состав торта:</h3>

              <ol>
                <li>
                  <span>1.</span> Бисквит красный бархат
                </li>
                <li>
                  {" "}
                  <span>2.</span> Прослойка из клубничного муса{" "}
                </li>
                <li>
                  {" "}
                  <span>3.</span> Клубничный кули
                </li>
                <li>
                  {" "}
                  <span>4.</span> Кремчиз на масле{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="Main-section-vido">
          <div className="vido-section-chiled" id="katalog">
            <div className="text">
              <h1>
                {" "}
                <span>1 этап </span> бисквит
              </h1>
            </div>

            <video
              src="https://youtu.be/062V6tR3xkw?si=W3gtllcnjoy4P9XA"
              controls
              className="Video"
            ></video>
          </div>
        </div>
        <div className="Main-section-vido">
          <div className="vido-section-chiled">
            <div className="text">
              <h1>
                {" "}
                <span>2 этап</span> НАЧИНКИ КЛУБНИЧНЫЙ <br />
                МУСС И КЛУБНИЧНЫЙ КУЛИ{" "}
              </h1>
            </div>

            <video
              src="https://youtu.be/062V6tR3xkw?si=yaS5cEQyOaIDltiQ"
              controls
              className="Video"
            ></video>
          </div>
        </div>
        <div className="Main-section-vido">
          <div className="vido-section-chiled">
            <div className="text">
              <h1>
                {" "}
                <span>3 этап</span> КРЕМ ДЛЯ СБОРКИ{" "}
              </h1>
            </div>

            <video
              src="https://youtu.be/D3ZGc6caDic?si=gBThQAuaJ_4vecCt"
              controls
              className="Video"
            ></video>
          </div>
        </div>
        <div className="Main-section-vido">
          <div className="vido-section-chiled">
            <div className="text">
              {" "}
              <h1>
                <span>4 этап</span> СБОРКА{" "}
              </h1>{" "}
            </div>

            <video
              src="https://youtu.be/062V6tR3xkw?si=W3gtllcnjoy4P9XA"
              controls
              className="Video"
            ></video>

          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="parent-container">
          <div className="main-pdf">
          <div className="text">
      <h1>Рецепт</h1>
      <p>для скачивания</p>
      <a href="#" onClick={handleDownload} className="download-link">
        <span>
          <AiOutlineDownload />
        </span>{" "}
        Скачать рецепт
      </a>
    </div>


            <img src="Greeting-img/Mask group (1).png" alt=""  className="pdf"/>
            <img src="Greeting-img/Mask group.png" alt="" className="pdf-end"/>
          </div>

          <div className="main-parent">
            <div className="text">
              <p>Дарим промокод</p>

              <h1>на скидку!</h1>

              <h4>
                По промокоду Present для вас доступна скидка 10% на следующую
                покупку рецепту
              </h4>

              <button>Выбрать рецепт</button>
            </div>

            <div className="img">
              <img src="Greeting-img/Rectangle 428.png" alt="" />
            </div>
          </div>
        </div>


      </div>
       
       <div className="section-parent">

        <div className="text-section">
          <h1>Вам понравятся</h1>
          <h3> эти рецепты:</h3>
        </div>

         
         <div className="boxses">
                       
                       <div className="box"></div>
                       <div className="box"></div>
                       <div className="box"></div>
                       <div className="box"></div>
                       <div className="box"></div>
                       <div className="box"></div>
                       <div className="box"></div>
                       <div className="box"></div>
                       <div className="box"></div>

         </div>
           
           <div className="btn">
            <NavLink to={"/concat"}>
            <button>Перейти в каталог рецептов</button>
            </NavLink>
           </div>

       </div>

    </div>
  );
};

export default Main;
