import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import './Course.css'
const Course = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <div className="drawer drawer-mobile mx-auto  h-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center outlet-conter">
                   

                   <Outlet></Outlet>



                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side left-side h-full">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                      
                    {/* text-xl font-semibold m-2 text-center left-side-link */}
                       
                        {
                            courses.map(c=><Link to={`/courses/${c.id}`} className='mx-auto mt-5'> <button className="btn btn-outline">{c.name}</button></Link>)
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Course;