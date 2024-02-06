import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PopularMenu from '../PopularMenu/PopularMenu';
import Chef from '../Chef/Chef';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Chef></Chef>
        </div>
    );
};

export default Home;