import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <div>
                <h1>Meal Api</h1>
                </div>
                <div className='text-xl'>
                    <NavLink className='navLink' to="/categories">Categories</NavLink>
                    <NavLink className='navLink' to="/areas">Areas</NavLink>
                    <NavLink className='navLink' to="/ingredients">Ingredients</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;