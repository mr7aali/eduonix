import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../../../assests/pic1.jpg"
import pic2 from "../../../assests/pic2.jpg"
import pic3 from "../../../assests/pic3.jpg"
import './Carousel.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const HomeCarousel = () => {
    return (
        <div>
            <Carousel className='home-carousel '>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h1 className='m-5 text-dark'>Start Learning a Digital Skill Now</h1>
                        <p className='mb-5 fs-5'>World is changing rapidly and so is the technology. Learn a new technology to build a better future for you and for the world. Choose to learn web development, app development and many more</p>
                        <Link to='/login'><Button className='m-5 p-3 fs-5' variant="primary">Get Start</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='m-5 text-dark'>Transform your life through education</h1>
                        <p className='mb-5 fs-5'>Better education opens up a new wave of opportunities and it is now more relevant than ever in the times we live in where technology and education ensure that opportunities are no longer limited by geography.</p>
                        <Link to='/login'><Button className='m-5 p-3 fs-5' variant="primary">Get Start</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='m-5 text-dark'>Learn without limits</h1>
                        <p className='mb-5 fs-5'>
                            Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.
                        </p>
                        <Link to='/login'><Button className='m-5 p-3 fs-5' variant="primary">Get Start</Button></Link>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;