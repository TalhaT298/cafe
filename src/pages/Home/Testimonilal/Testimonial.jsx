import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"What our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
    </section>
  );
};

export default Testimonial;
