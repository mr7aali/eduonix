import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Register.css'
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
    const { createUser, googleLogIn } = useContext(AuthContext);

    const handleCreateAccount = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form)
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }


    const handleGoogleSingIn = () => {
        const googleProvider = new GoogleAuthProvider();
        googleLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (

        <div className=' m-auto mt-5 w-50 register-frm'>
            <Form onSubmit={handleCreateAccount}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-3'>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-3'>photoURL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter Your Name" />
                    <Form.Text className="text-muted">
                        We'll never share your picture with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-3' > Your Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter Your email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-3'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder=" Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Account
                </Button>

                <p className='fs-5 text-primary mt-5'>Do you have an account? <Link to='/login' className='text-danger'>Login here</Link></p>


                <h1>Or</h1>
                <Button onClick={handleGoogleSingIn} variant="outline-primary">Continue with Google</Button>
                <Button className='ms-3' variant="outline-secondary">Continue with GitHub</Button>
            </Form>

        </div>

    );
};

export default Register;