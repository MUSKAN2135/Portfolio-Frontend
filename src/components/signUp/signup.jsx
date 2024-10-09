import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Email: '',
    Password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/SignupUser", formData);
      navigate("/login");
      console.log(response.data);
      toast.success('Signup successfully!');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        toast.error(error.response.data.message || 'Signup failed!');
      }
    }
  };
  return (
    <div>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center my-5" style={{ height: '80vh' }}>
        <div className="p-5" style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="mb-4 text-center">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First_Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="First_Name"
                    value={formData.First_Name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last_Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="Last_Name"
                    value={formData.Last_Name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Sign Up
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};
export default Signup;
