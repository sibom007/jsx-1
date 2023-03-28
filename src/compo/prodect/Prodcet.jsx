import React from 'react';
import './prodect.css'

const Prodcet = (props) => {
    const {img,name,price,ratings,seller,} =props.prodect;
    const cardhandeler =props.cardhandeler;
    return (
        <div className='card-contener'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h6>{name}</h6>
                <p className='price'>price: ${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Ratings:{ratings} Stact</p>
            </div>
            <button className='btn' onClick={() => cardhandeler(props.prodect)}>Add to Cart</button>
        </div>
    );
};

export default Prodcet;