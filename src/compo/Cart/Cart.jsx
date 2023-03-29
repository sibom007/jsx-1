import React from 'react';
import './cart.css'
const Cart = (props) => {
    const {cart}= props;
    
    let total = 0;
    let totalShipping = 0;

    for(const prodect of cart){
       total=total + prodect.price;
       totalShipping =totalShipping +prodect.shipping;
    }
    const tax =total*8/100;
    const grandprise =total +totalShipping+tax;

   



    return (
        <div className='cart'>
            <h1>Show price</h1>
            <p>select itmes:{cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: $ {grandprise.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;