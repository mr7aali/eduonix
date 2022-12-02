import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import app from '../../../firebase/firebase.config';
import './Resister.css'
const auth = getAuth(app)

const Resister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    //    const {createUserEmailAndPass}= useContext(AuthContext);
    const [error,setError]=useState();


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



   
    const { createUserEmailAndPass,singWithGoogle } = useContext(AuthContext);

    const handleResister = (data) => {
        createUserEmailAndPass(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);


                updateProfile(auth.currentUser, {
                    displayName: data.name,
                })
                    .then(() => {
                        console.log(user.displayName)

                    }).catch(err => console.log(err))
                    navigate(from, { replace: true });

            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
              if(errorMessage === 'Firebase: Error (auth/email-already-in-use).'){
                const massage = "User Already Exsist";
                setError(massage);
              }   
              else if(errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                setError(null)
                const massage = "Password should be at least 6 characters"
                
                setError(massage)
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
        <div>



            <div className="hero  bg-base-200 full-login-container">



                <div className="hero-content ">

                    {/* <div className="text-center lg:text-left">
                      
                    <img src='https://i.ibb.co/M7C7CsZ/resister-img.jpg' alt="" />
                        
                    </div> */}

                    <div className="login-page card flex-shrink-0 w-full shadow-2xl bg-base-100 Resister-page">



                        <div className="text-center lg:text-left login-img">


                            <img className='max-h-80' src='https://i.ibb.co/M7C7CsZ/resister-img.jpg' alt="" />
                           

                        </div>


                        <form onSubmit={handleSubmit(handleResister)}>
                            <div className="card-body resister-card">
                            <h1 className="text-4xl mt-5 font-bold text-center mb-5">Resister now!</h1>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register('name')} type="text" placeholder="name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register('email')} type="text" placeholder="email" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register('password')} type="text" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <h1>Do you have an account?<Link className='text-primary font-bold' to='/login'> Long In</Link></h1>
                                  
                                    </label>
                                </div>
                                
                                    {
                                        error && <h1 className='text-red-600 font-semibold'>{error}</h1>
                                    }
                                        
                                  
                               

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Resister</button>
                                </div>
                                <div className="divider">OR</div>
                                <div onClick={handleGoogleSingIn} className="form-control ">
                                    <button className="btn btn-primary">Resister With Google</button>
                                </div>

                            </div>
                        </form>
                       


                    </div>

                </div>



            </div>
        </div>
    );
};

export default Resister;