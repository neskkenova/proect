import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <header>
            <h1>showroom_aminka</h1>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Entrance</Link></li>
                <li><Link to="/users">UserList</Link></li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Header;
