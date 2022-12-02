import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './CourseDetails.css'

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'Portrait',
    unit: 'in',
    format: [14,12]
};


const CourseDetails = () => {
    const course = useLoaderData();

    return (

        <div>


            <div className='mx-auto  m-40 details-container' ref={ref}>


                <div className="card card-compact w-1/2 mx-center bg-base-100 shadow-xl single-div">
                    <figure><img src={course?.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl  m-5 card-title">{course?.name}</h2>
                        <p className='text-lg font-bold text-primary mb-5 ml-5j'>Price: {course?.price}</p>
                        <p className='text-xl m-5'>{course?.details}</p>

                    </div>
                    <div className='details-btn-container w-1/2'>

                        <Link to={`/access/${course.id}`} className="btn btn-outline text-center w-2/5">premium access</Link>
                       
                       
                        {/* <button to='/login' className="btn btn-active text-center w-2/5">Download</button> */}
                        <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={-2} y={1} scale={0.8}>
                            {({ toPdf }) => <button  className="btn btn-active text-center w-2/5" onClick={toPdf}>Download Pdf</button>}
                        </Pdf>
                    </div>
                </div>



            </div>
        </div>


    );
};

export default CourseDetails;