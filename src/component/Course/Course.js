import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Course.css'
const Course = () => {
    
    const [Course, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <Container>
            <Row>
                <Col className='left-col' lg={4}>
                    <h1>Right</h1>
                </Col>
                <Col className='right-col' lg={8}>
                    <h1>Left</h1>
                </Col>

            </Row>
        </Container>
    );
};

export default Course;