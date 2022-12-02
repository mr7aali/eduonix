import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className='error-page'>
            <div>
                <h1 className='text-5xl font-bold text-red-600'> This page not found</h1>
                <p className='text-3xl font-bold mt-5'>Click for <go></go> to <Link to='/' className='text-primary'>home page</Link> </p>
            </div>
        </div>
    );
};

export default Error;