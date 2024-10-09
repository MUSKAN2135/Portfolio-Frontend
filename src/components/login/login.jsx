import React, { useState } from 'react';
import { Form, Button, Container, InputGroup, FormControl, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
// import ProductBar from '../Products/productbar';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ Email: '', Password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/v1/Loginuser", formData);
            console.log(response)
            navigate('/');
            toast.success('login successfully')
        } catch (error) {
            toast.error('login failed')
            setError('Login failed. Please check your Email and Password.');
            setSuccess('');
            console.log(error.message);
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            {/* <ProductBar /> */}
            {/* <Navbar /> */}
            <div className="d-flex justify-content-center align-items-center " style={{ height: '80vh' }}>
                <div className="p-5" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Link to="/signup" className="nav-item nav-link p-3 d-flex justify-content-end">Register</Link>
                    <h2 className="mb-4 text-center">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="Email"
                                placeholder="Enter your Email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type={showPassword ? "text" : "Password"}
                                    placeholder="Enter your Password"
                                    name="Password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                />
                                <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                        <Link to="/forgot-Password" className="d-block mt-2 mb-3 text-end" style={{ color: '#007bff' }}>
                            Forgot Password?
                        </Link>

                        <Button variant="primary" type="submit" style={{ width: '100%' }}>
                            Login
                        </Button>

                        <div className="text-center mt-3">
                            Don't have an account?
                            <Button variant="link" onClick={() => navigate('/signup')}>
                                Sign Up
                            </Button>
                        </div>
                        <hr className="my-4" />
                    </Form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Login;
