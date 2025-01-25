import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStarSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import "./Swiper.scss";
import { SiComma } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".prevarrow",
          prevEl: ".nextarrow",
        }}
        breakpoints={{
          307: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        className="Main-swiper-end"
      >
        <SwiperSlide>
          <div className="swiper-chiled">
            <div className="swiper-top">
              <div className="img">
                <img src="Main-swiper/Rectangle 14.png" alt="" />
              </div>

              <div className="text-swp">
                {" "}
                <h4 className="text-h3">
                  Анна <br />
                  <span> 26 лет, Бухгалтер </span>
                </h4>{" "}
              </div>

              <div className="icon">
                <FaQuoteLeft />
              </div>
            </div>

            <p>
              Я всегда мечтала научиться готовить красивые и вкусные торты, но
              не знала, с чего начать. Этот курс стал для меня настоящим
              открытием! Уроки понятные, а преподаватели очень терпеливые и
              всегда готовы помочь. Теперь мои торты – настоящие произведения
              искусства, и я даже начала принимать заказы! Огромное спасибо за
              это обучение!
            </p>

            <div className="swiper-end">
              <div className="start">
                <IoStarSharp className="sart" />

                <span>(4.8)</span>
              </div>

              <p>2 марта 2024 год</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-chiled">
            <div className="swiper-top">
              <div className="img">
                <img src="Main-swiper/Rectangle 14.png" alt="" />
              </div>

              <div className="text-swp">
                {" "}
                <h4 className="text-h3">
                  Анна <br />
                  <span> 26 лет, Бухгалтер </span>
                </h4>{" "}
              </div>

              <div className="icon">
                <FaQuoteLeft />
              </div>
            </div>

            <p>
              Я всегда мечтала научиться готовить красивые и вкусные торты, но
              не знала, с чего начать. Этот курс стал для меня настоящим
              открытием! Уроки понятные, а преподаватели очень терпеливые и
              всегда готовы помочь. Теперь мои торты – настоящие произведения
              искусства, и я даже начала принимать заказы! Огромное спасибо за
              это обучение!
            </p>

            <div className="swiper-end">
              <div className="start">
                <IoStarSharp className="sart" />

                <span>(4.8)</span>
              </div>

              <p>2 марта 2024 год</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-chiled">
            <div className="swiper-top">
              <div className="img">
                <img src="Main-swiper/Rectangle 14.png" alt="" />
              </div>

              <div className="text-swp">
                {" "}
                <h4 className="text-h3">
                  Анна <br />
                  <span> 26 лет, Бухгалтер </span>
                </h4>{" "}
              </div>

              <div className="icon">
                <FaQuoteLeft />
              </div>
            </div>

            <p>
              Я всегда мечтала научиться готовить красивые и вкусные торты, но
              не знала, с чего начать. Этот курс стал для меня настоящим
              открытием! Уроки понятные, а преподаватели очень терпеливые и
              всегда готовы помочь. Теперь мои торты – настоящие произведения
              искусства, и я даже начала принимать заказы! Огромное спасибо за
              это обучение!
            </p>

            <div className="swiper-end">
              <div className="start">
                <IoStarSharp className="sart" />

                <span>(4.8)</span>
              </div>

              <p>2 марта 2024 год</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-chiled">
            <div className="swiper-top">
              <div className="img">
                <img src="Main-swiper/Rectangle 14.png" alt="" />
              </div>

              <div className="text-swp">
                {" "}
                <h4 className="text-h3">
                  Анна <br />
                  <span> 26 лет, Бухгалтер </span>
                </h4>{" "}
              </div>

              <div className="icon">
                <FaQuoteLeft />
              </div>
            </div>

            <p>
              Я всегда мечтала научиться готовить красивые и вкусные торты, но
              не знала, с чего начать. Этот курс стал для меня настоящим
              открытием! Уроки понятные, а преподаватели очень терпеливые и
              всегда готовы помочь. Теперь мои торты – настоящие произведения
              искусства, и я даже начала принимать заказы! Огромное спасибо за
              это обучение!
            </p>

            <div className="swiper-end">
              <div className="start">
                <IoStarSharp className="sart" />

                <span>(4.8)</span>
              </div>

              <p>2 марта 2024 год</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-chiled">
            <div className="swiper-top">
              <div className="img">
                <img src="Main-swiper/Rectangle 14.png" alt="" />
              </div>

              <div className="text-swp">
                {" "}
                <h4 className="text-h3">
                  Анна <br />
                  <span> 26 лет, Бухгалтер </span>
                </h4>{" "}
              </div>

              <div className="icon">
                <FaQuoteLeft />
              </div>
            </div>

            <p>
              Я всегда мечтала научиться готовить красивые и вкусные торты, но
              не знала, с чего начать. Этот курс стал для меня настоящим
              открытием! Уроки понятные, а преподаватели очень терпеливые и
              всегда готовы помочь. Теперь мои торты – настоящие произведения
              искусства, и я даже начала принимать заказы! Огромное спасибо за
              это обучение!
            </p>

            <div className="swiper-end">
              <div className="start">
                <IoStarSharp className="sart" />

                <span>(4.8)</span>
              </div>

              <p>2 марта 2024 год</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-chiled">
            <div className="swiper-top">
              <div className="img">
                <img src="Main-swiper/Rectangle 14.png" alt="" />
              </div>

              <div className="text-swp">
                {" "}
                <h4 className="text-h3">
                  Анна <br />
                  <span> 26 лет, Бухгалтер </span>
                </h4>{" "}
              </div>

              <div className="icon">
                <FaQuoteLeft />
              </div>
            </div>

            <p>
              Я всегда мечтала научиться готовить красивые и вкусные торты, но
              не знала, с чего начать. Этот курс стал для меня настоящим
              открытием! Уроки понятные, а преподаватели очень терпеливые и
              всегда готовы помочь. Теперь мои торты – настоящие произведения
              искусства, и я даже начала принимать заказы! Огромное спасибо за
              это обучение!
            </p>

            <div className="swiper-end">
              <div className="start">
                <IoStarSharp className="sart" />

                <span>(4.8)</span>
              </div>

              <p>2 марта 2024 год</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-btn">
          <div className="nextarrow">
            <GrLinkPrevious />
          </div>

          <div className="prevarrow">
            <GrLinkNext />
          </div>
        </div>
      </Swiper>
    </>
  );
}

// <>
//   <Swiper
//     slidesPerView={3}
//     spaceBetween={30}
//     keyboard={{
//       enabled: false,
//     }}
//     breakpoints={{
//       307: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//     }}
//     loop={true}
//     navigation={{
//       prevEl: ".prevarrow",
//       nextEl: ".nextarrow",
//     }}
//     modules={[Keyboard, Pagination, Navigation]}
//     className="Main-Swiper"
//   >
//     <SwiperSlide className="chailid-swiper">
//       {/* Content Removed */}
//     </SwiperSlide>
//     <SwiperSlide className="chailid-swiper">
//       {/* Content Removed */}
//     </SwiperSlide>
//     <SwiperSlide className="chailid-swiper">
//       {/* Content Removed */}
//     </SwiperSlide>
//     <SwiperSlide className="chailid-swiper">
//       {/* Content Removed */}
//     </SwiperSlide>
//     <SwiperSlide className="chailid-swiper">
//       {/* Content Removed */}
//     </SwiperSlide>
//     <SwiperSlide className="chailid-swiper">
//       {/* Content Removed */}
//     </SwiperSlide>
//   </Swiper>

//   <div className="swipernav">
//     <div className="prevarrow">
//       <GoArrowLeft />
//     </div>
//     <div className="nextarrow">
//       <GoArrowRight />
//     </div>
//   </div>
// </>
