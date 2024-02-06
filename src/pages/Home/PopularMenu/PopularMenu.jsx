import React, { useEffect, useState } from 'react';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>setMenu(data) )
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