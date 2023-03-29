import React, { useEffect, useState} from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() => {
        const storecart =getShoppingCart();
        const savecart =[];
        for(const id in storecart){
            const addprodect =prodect.find(prodect => prodect.id === id)
            if(addprodect){
                const quantity =storecart[id]
                addprodect.quantity = quantity;
                savecart.push(addprodect);
            }
        }
        setcart(savecart);
    },[prodect])


    const cardhandeler =(newprodect)=>{
       const newcart =[...cart, newprodect];
       setcart(newcart);
       addToDb(newprodect.id)
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;