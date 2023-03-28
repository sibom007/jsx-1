import React, { useEffect, useState} from 'react';
import Prodcet from '../prodect/Prodcet';
import './Shop.css'
const Shop = () => {
    const [prodect ,setprodect] =useState([])
    const [cart ,setcart]=useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setprodect(data))
    },[])
    const cardhandeler =(newprodect)=>{
       const newcart =[...cart, newprodect];
       setcart(newcart);
    }
    return (
        <div className='prodect-contener'>
           <div className='prodect-prant'>
                {
                    prodect.map( prodect => <Prodcet 
                        key={prodect.id}
                        prodect={prodect}
                        cardhandeler={cardhandeler}
                        ></Prodcet>)
                       
                }
                  
            </div> 

            <div>
                <h1>Show price</h1>
                <p>select itmes:{cart.length}</p>
                

            </div>
        </div>
    );
};

export default Shop;