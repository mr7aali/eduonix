import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className=''>



            <div className="hero  bg-base-200 full-login-container">



                <div className="hero-content ">

                    {/* <div className="text-center lg:text-left">
                      
                    <img src='https://i.ibb.co/M7C7CsZ/resister-img.jpg' alt="" />
                        
                    </div> */}

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 login-page">



                    <div className="text-center lg:text-left login-img">
                    
                      
                      <img className='max-h-80' src='https://i.ibb.co/KVzHctH/mobile-login-concept-illustration-114360-83.webp' alt="" />
                     
                          
                      </div>

                        
                        <div className="card-body login-card">
                        <h1 className="text-4xl mt-5 font-bold text-center mb-5">Login now!</h1>

                           

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
                                    <h1>Don't  have an account?<Link className='text-primary font-bold' to='/resister'> Resister</Link></h1>
                                   
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </div>


                    </div>

                </div>



            </div>
        </div>
    );
};

export default Login;