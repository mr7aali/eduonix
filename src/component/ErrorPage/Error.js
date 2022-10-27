import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className='error-page'>
            <div className='text-center text-danger '>
                <h1>Page Not Found</h1>
                <Link to='/'>Go to Home Page</Link>
            </div>
        </div>
    );
};

export default Error;