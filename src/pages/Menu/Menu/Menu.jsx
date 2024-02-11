import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu.webp'
import dessertImg from '../../../assets/dessert.webp'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]= useMenu()
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>javaJive |Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* min cover */}
            <SectionTitle subHeading="Don't Miss" heading="Toda's Offer"></SectionTitle>
            {/* offermenu */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desert */}
            <MenuCategory
            

            items={desserts}
            title="Dessert"
            img={dessertImg}
            >


            </MenuCategory>
        </div>
    );
};

export default Menu;