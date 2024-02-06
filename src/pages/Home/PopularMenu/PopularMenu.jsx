import React, { useEffect, useState } from 'react';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems=data.filter(item=> item.category==='popular');
            setMenu(popularItems)} )
    },[])
    return (
        <section>
            <SectionTitle
          subHeading={"From Our Menu"}
          heading={"Popular item"}
        ></SectionTitle>
        <div>
            {
                menu.map(item=>)
            }
        </div>
        </section>
    );
};

export default PopularMenu;