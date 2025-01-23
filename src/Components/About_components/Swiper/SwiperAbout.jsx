import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperAbout.scss";
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <div>
      <div className="text-abour-swiper">
        <h3>Работы</h3>
        <h1>учеников</h1>
      </div>
      <div className="custom-container">
        <button className="custom-prev">←</button>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            307: {
              slidesPerView: 1,
              spaceBetween: 50,
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
          modules={[Navigation]}
          className="About-swiper"
        >
          <SwiperSlide className="swiper-container">
            <img src="Swiper-about/Rectangle 10.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <img src="Swiper-about/Rectangle 43.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <img src="Swiper-about/Rectangle 44.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <img src="Swiper-about/Rectangle 10.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <img src="Swiper-about/Rectangle 43.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <img src="Swiper-about/Rectangle 44.png" alt="" />
          </SwiperSlide>
        </Swiper>

        <button className="custom-next">→</button>
      </div>
    </div>
  );
}
