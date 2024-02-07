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
import slide8 from "../../../assets/32.webp";
import slide9 from "../../../assets/33.webp";
import slide10 from "../../../assets/34.webp";
import slide11 from "../../../assets/35.webp";
import slide12 from "../../../assets/36.webp";
import slide13 from "../../../assets/37.webp";
import slide14 from "../../../assets/38.webp";
import slide15 from "../../../assets/39.webp";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Catagory = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"From 11.00am to 10.00pm"}
          heading={"Order Now"}
        ></SectionTitle>
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
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Noodles
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Soap
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Pasta
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Sandwich
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Burger
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide6} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Sadns
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide7} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide8} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide9} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide10} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide11} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide12} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide13} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide14} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide15} alt="" />
            <h3 className="text 4xl uppercase text-center -mt-16 text-white">
              Chicken
            </h3>
          </SwiperSlide>
          
        </Swiper>
      </section>
    </>
  );
};

export default Catagory;
