import React from 'react';

const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default MenuItem;