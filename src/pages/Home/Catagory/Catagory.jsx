import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/Untitled design (5).webp";
import slide2 from "../../../assets/Untitled design (6).webp";
import slide3 from "../../../assets/Untitled design (7).webp";
import slide4 from "../../../assets/Untitled design (8).webp";
import slide5 from "../../../assets/Untitled design (9).webp";
import slide6 from "../../../assets/Untitled design (10).webp";
import slide7 from "../../../assets/Untitled design (11).webp";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Catagory = () => {
  return (
    <>
      <section>
        <SectionTitle
        heading={"From 11.00am to 10.00pm"}
        >

        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">Noodles</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">Soap</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">Pasta</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">Sandwich</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">Burger</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide6} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">Sadns</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide7} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">Chicken</h3>
        </SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </section>
    </>
  );
};

export default Catagory;
