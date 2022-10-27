import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = ({ course }) => {
    const { id, name, price, photo, details } = course;
    return (
        <div className='card-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='cart-photo' variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 90 ?
                                <p>{details.slice(0, 90) + "..."} <Link to={`/courses/${course.id}`} >Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Link to={`/courses/${course.id}`}><Button variant="primary">Details</Button></Link> <span className='ms-3'>Cost ${price}</span>
                </Card.Body>
                {/* <Card.Footer>
                        <p>{price}</p>
                    </Card.Footer> */}
            </Card>
        </div>
    );
};

export default Cart;


