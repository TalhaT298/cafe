import React, { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // const [menu,setMenu]=useState([]);
  // useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data =>{
  //         const popularItems=data.filter(item=> item.category==='popular');
  //         setMenu(popularItems)} )
  // },[])
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Popular item"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className=" btn btn-outline border-0 border-b-4  mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
