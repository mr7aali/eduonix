import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../contetent/Footer/Footer';
import Header from '../contetent/Header/Header';

const Main = () => {
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;