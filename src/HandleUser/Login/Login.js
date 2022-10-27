import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const {singIn,setUser,googleLogIn}= useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const from = event.target;
        console.log(from)
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
       singIn(email,password)
       .then(result=>{
         const user = result.user;
         console.log(user);
         setUser(user);
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

        <div>
            <div className=' m-auto mt-5 w-50 register-frm'>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-3' > Your Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter Your email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fs-3'>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder=" Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <p className='fs-5 text-primary'>Do you have an account? <Link to='/register' className='text-danger'>Register here</Link></p>
                    <h1>Or</h1>
                    <Button onClick={handleGoogleSingIn} variant="outline-primary">Continue with Google</Button>
                    <Button className='ms-3' variant="outline-secondary">Continue with GitHub</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;