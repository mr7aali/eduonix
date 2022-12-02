import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './Privet.css'

const Privet = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location= useLocation();
    
    if(loading){
        return <div className='loder-pro'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user && user.email){
        return children;
    }
    return  <Navigate to='/login' state={{ from: location }} replace></Navigate> 
};

export default Privet;