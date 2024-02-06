import React, { useEffect, useState } from 'react';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItem=data.filter(item=> item.category==='popular');
            setMenu(data.filter)} )
    },[])
    return (
        <section>
            <SectionTitle
          subHeading={"From Our Menu"}
          heading={"Popular item"}
        ></SectionTitle>
        </section>
    );
};

export default PopularMenu;