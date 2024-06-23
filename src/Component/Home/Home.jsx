import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='home'>
                <h1>This is home component</h1>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;