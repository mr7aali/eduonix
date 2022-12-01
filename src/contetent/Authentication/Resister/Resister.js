import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Resister.css'
const Resister = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    return (
        <div>



            <div className="hero  bg-base-200">



                <div className="hero-content ">

                    {/* <div className="text-center lg:text-left">
                      
                    <img src='https://i.ibb.co/M7C7CsZ/resister-img.jpg' alt="" />
                        
                    </div> */}

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 Resister-page">



                    <div className="text-center lg:text-left">
                    
                      
                      <img className='max-h-80' src='https://i.ibb.co/M7C7CsZ/resister-img.jpg' alt="" />
                      <h1 className="text-4xl mt-5 font-bold text-center mb-5">Resister now!</h1>
                          
                      </div>

                        
                        <div className="card-body">
                       

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <h1>Do you have an account?<Link className='text-primary font-bold' to='login'> Long In</Link></h1>
                                   
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Resister</button>
                            </div>

                        </div>


                    </div>

                </div>



            </div>
        </div>
    );
};

export default Resister;