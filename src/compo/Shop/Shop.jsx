import React, { useEffect, useState} from 'react';
import Prodcet from '../prodect/Prodcet';
import './Shop.css'
const Shop = () => {
    const [prodect ,setprodect] =useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setprodect(data))
    },[])
    return (
        <div className='prodect-contener'>
           <div className='prodect-prant'>
                {
                    prodect.map( prodect => <Prodcet 
                        key={prodect.id}
                        prodect={prodect}
                        ></Prodcet>)
                }
            </div> 

            <div>
                <h1>Show price</h1>
            </div>
        </div>
    );
};

export default Shop;