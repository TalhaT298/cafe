import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PopularMenu from '../PopularMenu/PopularMenu';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonilal/Testimonial';

const Home = () => {
    return (
        <div>
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