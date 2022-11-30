import React from 'react';

const Header = () => {
    return (
        //max-w-screen-2xl mx-auto
        <div>
            <div className="navbar bg-base-200 max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                       
                    </div>
                    <a href=' ' className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href=' '>Item 1</a></li>
                       
                        <li><a href=' '>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href=' ' className="btn">Loging</a>
                </div>
            </div>
        </div>
    );
};

export default Header;