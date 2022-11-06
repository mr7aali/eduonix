import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';


import './Course.css'
const Course = () => {

    const [Courses, setCourse] = useState([]);
   

    useEffect(() => {
        fetch('https://eduonix-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
   console.log(Courses);
    return (
        <Container>
            <Row className='m-5'>
                <Col className='left-col' lg={4}>
                    {
                        Courses.map(course => <Link
                            key={course.id}
                            className='fs-3 pe-5 mb-3'
                            to={`/courses/${course.id}`}
                        > {course.name}</Link>)
                    }
                </Col>

                <Col className='right-col cart-container' lg={8}>
                    {
                        Courses.map(course => <Cart
                            key={course.id}
                            course ={course}

                        ></Cart>)
                    }
                </Col>

            </Row>
        </Container>
    );
};

export default Course;