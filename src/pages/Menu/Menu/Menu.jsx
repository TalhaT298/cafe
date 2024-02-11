import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu.webp'
import useMenu from '../../../hooks/useMenu';
const Menu = () => {
    const [menu]= useMenu()
    const dessert = menu.filter((item) => item.category === "dessert");
    return (
        <div>
            <Helmet>
                <title>javaJive |Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            
        </div>
    );
};

export default Menu;