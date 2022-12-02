import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ToggleSwitch from '../Toggole/ToggleSwitch';
import './Header.css'


const Header = () => {
    const { user, LogOut } = useContext(AuthContext);
    console.log(user?.photoURL)
    console.log(user)
    const handleLogOut = () => {
        LogOut()
    }

    return (
        //max-w-screen-2xl mx-auto
        <div className=' bg-base-300 full-header'>

            <div className="navbar mx-auto max-w-screen-xl	">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href=' '>Item 1</a></li>
                            <li tabIndex={0}>
                                <a href=' ' className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a href=' '>Submenu 1</a></li>
                                    <li><a href=' '>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a href=' '>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case  font-bold text-xl">best Sch <span className='text-primary font-bold'>oo</span> l</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">


                        <li className='text-xl'><Link to='course'>Course</Link></li>
                        <li className='text-xl'><Link to='home'>Faq</Link></li>
                        <li className='text-xl'><Link to='blog'>Blog</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">

                    <React.Fragment>
                        <ToggleSwitch  label=" "  />
                    </React.Fragment>
                    

                    {
                        user ?
                            <>

                                <div className='header-name-img-container'>



                                    <div id='left' className='m-2 name-container '>
                                        <div className="font-bold">{user?.displayName}</div>
                                        <div className="text-sm opacity-50">{user?.email}</div>
                                    </div>






                                    <div className="avatar just-img-div">
                                        <div className="mask mask-squircle w-12 h-12 mr-5  header-img ">


                                            {
                                                user.photoURL ?
                                                    <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    :
                                                    <img src={'https://i.ibb.co/vqPRQzM/depositphotos-69759195-stock-illustration-male-person-silhouette.webp'} alt="Avatar Tailwind CSS Component" />
                                            }

                                        </div>
                                    </div>


                                </div>

                                <Link to='/resister' onClick={handleLogOut} className='btn'>Log Out </Link>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn btn-outline mx-5">Log In</Link>
                                <Link to='/resister' className='btn'>Resister </Link>
                            </>

                    }



                </div>






































            </div>

            <hr />
        </div>
    );
};

export default Header;