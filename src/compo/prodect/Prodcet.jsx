import React from 'react';
import './prodect.css'

const Prodcet = (props) => {
    const {img,name,price,ratings,seller,} =props.prodect;
    console.log(props.prodect);
    return (
        <div className='card-contener'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h6>{name}</h6>
                <p className='price'>price: ${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Ratings:{ratings} Stact</p>
            </div>
            <button className='btn'>Add to Cart</button>
        </div>
    );
};

export default Prodcet;