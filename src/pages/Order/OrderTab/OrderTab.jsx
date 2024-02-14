import React from 'react';
import FoodCard from '../../../components/SectionTitle/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({items}) => {
    return (
        <div>
           <div className="grid md:grid-cols-3 gap-10">
        {
            items.map(item => <FoodCard
            key={item._id}
            item={item}
            
            ></FoodCard>)
        }
        </div> 
        </div>
    );
};

export default OrderTab;