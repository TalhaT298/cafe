import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from "../../../assets/feature.webp"
import './Featured.css';
const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white mb-12 pt-6 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Feature"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 pt-12 px-36">
      <div>
        <img src={feature} alt="" />
      </div>
      <div className="md:ml-10">
        <p>Aug 20,2024</p>
        <p className="uppercase">Where I can get Some</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
      </div>
      </div>
    </section>
  );
};

export default Featured;
