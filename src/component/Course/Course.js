import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Course.css'
const Course = () => {
    
    const [Courses, setCourse] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
   console.log(Courses)
    return (
        <Container>
            <Row className='m-5'>
                <Col className='left-col' lg={4}>
                    {
                        Courses.map(course=><Link 
                        key={course.id}
                        className='fs-3 mb-3'
                        > {course.name}</Link>)
                    }
                </Col>
                <Col className='right-col' lg={8}>
                    <h1>Left</h1>
                </Col>

            </Row>
        </Container>
    );
};

export default Course;