import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const { logIn,singWithGoogle } = useContext(AuthContext);
    const [error,setError]=useState(null);
  
    const { register, handleSubmit, formState: { errors } } = useForm();

   
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleLogin = (data) => {
      
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
             console.log(user)
             navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(null)
                const errorMessage = error.message;
             if(errorMessage === "Firebase: Error (auth/wrong-password)." ){
                const massage = "Wrong password ,try agin" 
                setError(massage);
             }
            
               
              
              console.log( error);
                // ..
              });


    }
    const handleGoogleSingIn=()=>{
        singWithGoogle()
        .then(result=>{
            const user= result.user;
            console.log(user)
            navigate(from, { replace: true });
        })
    }

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


                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="card-body login-card">
                                <h1 className="text-4xl mt-5 font-bold text-center mb-5">Login now!</h1>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register('email')} type="text" placeholder="email" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register('password')} type="text" placeholder="password" className="input input-bordered" required/>
                                    <label className="label">
                                        <h1>Don't  have an account?<Link className='text-primary font-bold' to='/resister'> Resister</Link></h1>

                                    </label>
                                </div>
                                {
                                        error && <h1 className='text-red-600 font-semibold'>{error}</h1>
                                 }
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div onClick={handleGoogleSingIn} className="form-control ">
                                    <button className="btn btn-primary">Sing In With Google</button>
                                </div>

                            </div>
                        </form>


                    </div>

                </div>



            </div>
        </div>
    );
};

export default Login;