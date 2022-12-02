import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div className='mx-auto  m-40 details-container'>


            <div className="card card-compact w-1/2 mx-center bg-base-100 shadow-xl single-div">
                <figure><img src={course?.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-4xl  m-5 card-title">{course?.name}</h2>
                    <p className='text-xl m-5'>{course?.details}</p>
                    
                </div>
            </div>



        </div>
    );
};

export default CourseDetails;