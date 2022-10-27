import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';
const CourseDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <Container>
            <CardGroup className='m-5'>
                
               
                <Card>
                    <Card.Img variant="top" src={data.photo} />
                    <Card.Body>
                        <Card.Title className='fs-1 mb-5'>{data.name}</Card.Title>
                        <Card.Text className='fs-3'>
                            {data.details}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>


            </CardGroup>
        </Container>
    );
};

export default CourseDetails;