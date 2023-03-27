import React from 'react';
import './nav.css'
import logo from '../../images/Logo.svg'
const Nav = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/Invetoy">Invetoy</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Nav;