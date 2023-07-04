import './Navbar.scss';

import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <div>
            <ul className='navbar-list'>
                <li>
                    <Link to="/" >Products</Link>
                </li>
                <li>
                    <Link to="/add" >Add Product</Link>
                </li>
                <li>
                    <Link to="/update" >Update Product</Link>
                </li>
                <li>
                    <Link to="/logout" >Logout</Link>
                </li>
                <li>
                    <Link to="/profile" >Profile</Link>
                </li>
                <li>
                    <Link to="/signup" >Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar