import React from 'react';
import './Banner.css'



const Banner = () => {
    return (
        <div  className=' rounded-lg mb-10 relative max-w-screen-xl	mx-auto	'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full relative">

                <div className='w-full img-gradient h-4/5 rounded-lg'>
                        <img alt=' ' src='' className="w-full" />
                 </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='text-6xl text-white font-bold '>Healthy Body <br /> <span className='text-red-700'>Fresh Mind</span></h1>
                        <p className='text-white mt-5 text-2xl'>Livestrong has an incredible wealth of information on exercises, health care, <br/> physical health, mental health and more. It is updated multiple times a day and comes complete , <br/> with great forums and up-to-date information about fitness trends that are relevant in today’s world.</p>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full relative">

                <div className='w-full img-gradient h-4/5'>
                        <img alt=' ' src='' className="w-full" />
                 </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='text-6xl text-white font-bold '>Don't Be Brat <br /> <span className='text-red-700'>Burn Fat</span></h1>
                        <p className='text-white mt-5 text-2xl'>As the name would imply, Muscle & Fitness is narrowly focused around how to <br/> build your muscles and stay in shape. It contains great information on specific ways <br/> to build muscle, including the types of workouts that are best for these purposes</p>
                    </div>

                </div>


                <div id="item3" className="carousel-item w-full relative">

                <div className='w-full img-gradient h-4/5'>
                        <img alt=' ' src=' ' className="w-full" />
                 </div>
                    <div className='absolute top-1/4 left-24 banner-h1'>
                        <h1 className='text-6xl text-white font-bold '> Work For  <br /> <span className='text-red-700' >Fresh Mind</span></h1>
                        <p className='text-white mt-5 text-2xl'>We’re all looking for that sweet spot between having peace of mind for most, if not <br/> all of our day. We also know we need to keep working at it. <br/>Delve into our resources for some inspiration, learning and tools to find what you most need, right now. </p>
                    </div>

                </div>


            </div>
            
            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-5  banner-Button">
                <a href="#item1" >
                    <button className="btn btn-outline   btn-circle">1</button>
                </a>
                <a href="#item2" >
                    <button className="btn btn-outline  btn-circle">2</button>
                </a>
                <a href="#item3" >
                    <button className="btn btn-outline  btn-circle">3</button>
                </a>
              
            </div>
        </div>
    );
};

export default Banner;