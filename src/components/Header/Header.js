import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='' className='logo' />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/mange-inventory">Manage Iventory</a>
            </nav>
        </div>
    );
};

export default Header;