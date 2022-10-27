
import React, { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Header.css'



const Header = () => {

    const { user, LogOut } = useContext(AuthContext);
    const {showName,setshowName } = useState(false)
    const handleSingOut = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
   const handleBluer =()=>{
           setshowName(true);
           console.log(showName)
   }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Link to='/home'>  <Navbar.Brand className='fs-2'>e-Shool</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5 me-auto">
                            <div className='header-link-container'>
                                <Link to='/courses' className='fs-5'>Courses</Link>
                                <Link to='fqa' className='fs-5'>FAQ</Link>
                                <Link to='blog' className='fs-5'>Blog</Link>
                            </div>

                        </Nav>
                        <Nav>
                            <Nav.Link>
                            {user?.displayName}
                            </Nav.Link>
                            <Nav.Link >
                                {
                                    user?.uid ?

                                        <div onBlur={handleBluer} className='user-profile-img'>
                                            <img src={user?.photoURL} alt="" />
                                        </div>
                                        :
                                        <></>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} >

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {
                        user?.uid ?
                            <Button onClick={handleSingOut} variant="light">Sing Out</Button>
                            :
                            <>
                                <Link className='m-2' to='/login'> <Button variant="light">Log In</Button></Link>
                                <Link className='m-2' to='/register'> <Button variant="light">Register</Button></Link>
                            </>
                    }
                </Container>


            </Navbar>
        </div>
    );
};

export default Header;