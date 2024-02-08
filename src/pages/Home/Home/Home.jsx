import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PopularMenu from '../PopularMenu/PopularMenu';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonilal/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>javaJive | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Chef></Chef>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;