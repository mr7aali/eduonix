import React, { useState } from 'react';
import './Banner.css'



const Banner = () => {
    const [btnClass1, setBtnClass1] = useState(true);
    const [btnClass2, setBtnClass2] = useState(false);
    const [btnClass3, setBtnClass3] = useState(false);

    const handleBtnClass1 = () => {
        setBtnClass1(true);
        setBtnClass2(false);
        setBtnClass3(false);


    }
    const handleBtnClass2 = () => {
        setBtnClass2(true);
        setBtnClass1(false);
        setBtnClass3(false);


    }
    const handleBtnClass3 = () => {
        setBtnClass3(true);
        setBtnClass2(false);
        setBtnClass1(false);


    }


    return (
        <div className=' rounded-lg mb-10 mt-10 relative max-w-screen-xl	mx-auto	'>
            <div className="carousel w-full">



                <div id="item1" className="carousel-item w-full relative">

                    <div className='w-full img-gradient h-4/5 rounded-lg'>
                        <img alt='https://i.ibb.co/P54wjFC/gym-equipment-accessories-on-stone-260nw-1644136534.webp ' src='https://i.ibb.co/dkhGHkT/bruce-mars-o-LStr-TTMz2s-unsplash-min.jpg' className="w-full" />
                    </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='text-6xl text-center text-white font-bold '>Start Learning the <br /> <span className='text-red-700'>Digital Skill Now</span></h1>
                        <p className='text-white text-center mt-20 text-2xl'>World is changing rapidly and so is the technology. Learn a new technology to build a better future <br /> for you and for the world. Choose to learn web development, app development and many more</p>


                        <div className='banner-btn'>
                            <button className="btn btn-primary text-center mt-16 mx-auto ">Get Start</button>
                        </div>
                    </div>

                </div>


                <div id="item2" className="carousel-item w-full relative">

                    <div className='w-full img-gradient h-4/5 rounded-lg'>
                        <img alt='https://i.ibb.co/P54wjFC/gym-equipment-accessories-on-stone-260nw-1644136534.webp ' src='https://i.ibb.co/dkhGHkT/bruce-mars-o-LStr-TTMz2s-unsplash-min.jpg' className="w-full" />
                    </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='text-6xl text-center text-white font-bold '> Transform <br /> <span className='text-red-700'>your life</span> through education</h1>
                        <p className='text-white text-center mt-20  text-2xl'>Better education opens up a new wave of opportunities and it is now more relevant than ever <br /> in the times we live in where technology and education ensure that opportunities are no longer limited by geography.</p>

                        <div className='banner-btn'>
                            <button className="btn btn-primary text-center mt-16 mx-auto ">Get Start</button>
                        </div>
                    </div>

                </div>


                <div id="item3" className="carousel-item w-full relative">

                    <div className='w-full img-gradient h-4/5 rounded-lg'>
                        <img alt='https://i.ibb.co/P54wjFC/gym-equipment-accessories-on-stone-260nw-1644136534.webp ' src='https://i.ibb.co/dkhGHkT/bruce-mars-o-LStr-TTMz2s-unsplash-min.jpg' className="w-full" />
                    </div>
                    <div className='absolute top-1/4  banner-h1'>
                        <h1 className='text-6xl text-center text-white font-bold '>Learn without <br /> <span className='text-red-700'>limits</span></h1>
                        <p className='text-white text-center mt-20  text-2xl'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.

                            .</p><div className='banner-btn'>
                            <button className="btn btn-primary text-center mt-16 mx-auto ">Get Start</button>
                        </div>
                    </div>

                </div>





            </div>

            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-5  banner-Button">
                <a href="#item1" >
                    <button onClick={handleBtnClass1} className={`btn btn-outline btn-circle ${btnClass1 ? 'bg-success' : ''}`}>1</button>
                </a>
                <a href="#item2" >
                    <button onClick={handleBtnClass2} className={`btn btn-outline btn-circle ${btnClass2 ? 'bg-success' : ''}`}>2</button>
                </a>
                <a href="#item3" >
                    <button onClick={handleBtnClass3} className={`btn btn-outline btn-circle ${btnClass3 ? 'bg-success' : ''}`}>3</button>
                </a>

            </div>
        </div>
    );
};

export default Banner;