import React, { useEffect } from "react";
import "./Main.scss";
import { HiLightBulb } from "react-icons/hi";
import Aos from "aos";
import Swiper from "../../Home_components/Swiper/Swiper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Main = () => {
  useEffect(() => {
    Aos.init({ once: false });
    Aos.refresh(); // Har safar yangilash
  }, []);
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="main-text" data-aos="zoom-out-down">
            <h1>Мои уроки</h1>
          </div>

          <div className="main-tabs">
            <h2 data-aos="zoom-out">для вас, если вы:</h2>

            <div className="tabs">
              <div className="tab" data-aos="fade-right">
                <div className="icon">
                  <HiLightBulb />
                  <h3>Любитель</h3>{" "}
                </div>

                <p>
                  Хотите научится готовить вкусные и красивые торты для себя и
                  близких
                </p>
              </div>
              <div className="tab" data-aos="zoom-in" data-aos-duration="500">
                <div className="icon">
                  {" "}
                  <HiLightBulb /> <h3>Новичок</h3>
                </div>
                <p>
                  Очень хотите начать, но сомневаетесь, что сможете так же, как
                  и другие кондитеры
                </p>
              </div>
              <div className="tab" data-aos="zoom-in" data-aos-duration="500">
                <div className="icon">
                  {" "}
                  <HiLightBulb /> <h3>Опытный</h3>{" "}
                </div>
                <p>
                  Вы уже опытный кондитер и хотите расширить свой ассортимент
                </p>
              </div>
              <div className="tab" data-aos="fade-left">
                <div className="icon">
                  {" "}
                  <HiLightBulb /> <h3>Ученик</h3>{" "}
                </div>
                <p>
                  Хотите освоить новый вид деятельности и начать на этом
                  зарабатывать
                </p>
              </div>
            </div>
          </div>

          <div className="main-cent">
            <div className="main-img" data-aos="zoom-in">
              <img
                src="Main-img/0885aed9716ce74c7508888bdd9d1fba.png"
                alt="massanges"
              />
            </div>
            <div className="main-text-cent">
              <h3 data-aos="zoom-out-down">Основатель школы</h3>

              <h1 data-aos="zoom-out">
                Матлюба <br />
                Шадиева
              </h1>
              <p className="cent-p" data-aos="flip-right">
                Приветствую, меня зовут Матлюба, я спикер и основатель
                онлайн-школы для кондитеров!
              </p>

              <div className="boxses">
                <div className="box">
                  <div
                    className="box-chiled"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="0" /* Boshlanishi kechiktirilmaydi */
                  >
                    12 <br />
                    лет
                  </div>
                  <p>опыта</p>
                </div>

                <div className="box">
                  <div
                    className="box-chiled"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="500" /* 500ms kechikish */
                  >
                    400+
                  </div>
                  <p>учеников</p>
                </div>

                <div className="box">
                  <div
                    className="box-chiled"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="1000" /* 1000ms kechikish */
                  >
                    800+
                  </div>
                  <p>работ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-controls">
          <div className="container-tols">
            <div className="controls-text">
              <h1>обучение</h1>

              <h2>может быть таким</h2>
            </div>

            <div className="controls-parent">
              <div className="tols" data-aos="fade-right">
                {" "}
                <div className="text">
                  Видео-уроки и технологичесике карты{" "}
                  <span>для приготовления тортов</span>
                </div>{" "}
                <img src="Main-cent/1.png" alt="massange" className="old" />{" "}
                <img src="public/Main-cent/1.1.png" alt="" className="end" />{" "}
              </div>
              <div className="tols" data-aos="zoom-in">
                {" "}
                <div className="text">
                  Авторский курс от <span> Matu school</span> для кондитеров
                </div>{" "}
                <img src="Main-cent/2.png" alt="masssage" className="old" />{" "}
                <img src="public/Main-cent/2.1.png" alt="" className="end" />
              </div>
              <div className="tols" data-aos="fade-left">
                {" "}
                <div className="text">
                  Гайд по приготовлению <span>бенто тортиков</span>
                </div>
                <img
                  src="Main-cent/3.png"
                  alt="massange"
                  className="old"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Main-swiper">
          <h1>Ученики</h1>

          <h3>довольные результатом обучения</h3>

          <Swiper />
        </div>
       
       <div className="main-acardion">

              
              <div className="acardion-text">
                <h1>Ответы</h1>
                <h3>на часто задааемые вопросы</h3>
              </div>


        <Accordion className="acardion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
            Ниже мы собрали часто задаваемые вопросы и ответили на них
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion className="acardion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
            Ниже мы собрали часто задаваемые вопросы и ответили на них
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
    
    
        <Accordion className="acardion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
            Ниже мы собрали часто задаваемые вопросы и ответили на них
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
    
    
        <Accordion className="acardion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
            Ниже мы собрали часто задаваемые вопросы и ответили на них
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
    
    
        <Accordion className="acardion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
            Ниже мы собрали часто задаваемые вопросы и ответили на них
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
    
    
        <Accordion className="acardion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
            Ниже мы собрали часто задаваемые вопросы и ответили на них
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
    
    

    
    
    
        
       </div>
        
        <div className="main-end">

           <h3>Остались Вопросы ?</h3>
               <p>Напишите нам в техподдержку 
и мы свяжемся с вами в ближайшее время и ответим на ваши вопросы</p>
           <button>Техподдержка</button>
        </div>

      </div>
    </>
  );
};

export default Main;
