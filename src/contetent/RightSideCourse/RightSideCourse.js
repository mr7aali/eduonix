import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './RoghtsideCourse.css'

const RightSideCourse = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>

            <div className='full-container-courses mt-20 mb-20'>


                {
                    courses?.map(c =>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='course-img' src={c.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{c.name}</h2>
                                <p className='mt-5 mb-5 text-xl'>

                                    {(c?.details?.length > 200) ?
                                        <>
                                            {c.details.slice(0, 200)}
                                            <Link to={`/courses/${c?.id}`} className='text-red-600 font-bold'> .....Read more</Link>
                                        </>
                                        :
                                        <></>
                                    }





                                </p>
                                <div className="card-actions justify-center ">
                                   
                                    <Link to={`/courses/${c?.id}`} className="btn btn-primary w-full ">
                                        <button   >
                                            Details
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    );
};

export default RightSideCourse;