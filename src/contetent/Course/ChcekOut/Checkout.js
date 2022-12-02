import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './CheckOut.css'
const Checkout = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData();
   console.log(course.price)
   useEffect(()=>{
    fetch()
   },[])
    return (

        <div className='checkout-container'>
            <h1 className='text-4xl text-center font-bold mb-10'>Get <span className='text-red-700'>{course.name}</span> </h1>
            <form >
                <div className='nameFild'>
                    <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-5/12 font-bold " />
                    <input type="text" disabled defaultValue={user?.email} className="input input-bordered w-1/2  font-bold " />
                </div>

                <div className='nameFild mt-5'>
                    <input type="text" disabled value={course.price + " $"} className="input  input-bordered mr-5 w-1/3" />
                    <input type="text" placeholder="Type here your  number" className="input input-bordered w-full " required />
                </div>

                <input type="text" placeholder=" type your preferable address" className="input input-bordered w-full mt-5" required />

                <div className='mt-5 mx-auto w-1/2'>
                    <button className="btn btn-outline w-full ">Click For Access</button>
                </div>
            </form>
        </div>

    );
};

export default Checkout;