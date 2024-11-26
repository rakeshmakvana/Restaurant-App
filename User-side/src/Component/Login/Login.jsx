import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaPhone } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import s4 from '../../assets/s4.png';
import s5 from '../../assets/s5.png';
import s6 from '../../assets/s6.png';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome ${username}!`);
    };

    return (
        <section className="login d-flex align-items-center justify-content-center">
            <img src={s2} alt="s2" className="login-image s2" />
            <img src={s3} alt="s3" className="login-image s3" />
            <img src={s4} alt="s4" className="login-image s4" />
            <img src={s5} alt="s5" className="login-image s5" />
            <img src={s6} alt="s6" className="login-image s6" />

            <Container>
                <Row className="justify-content-center">
                    <Col lg={4} md={6} sm={8} xs={10}>
                        <div className="Form-container p-4 rounded-4 shadow">
                            <div className="text-center mb-4">
                                <img src={logo} alt="Logo" className="logo img-fluid mb-3" />
                                <h1 className="logo-text fw-bold text-warning">RESTAURANTS</h1>
                                <p className="tagline text-secondary">Your Tagline</p>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="username" className="mb-3">
                                    <Form.Label className="text-white">
                                        User Name<span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="position-relative">
                                        <Form.Control
                                            type="text"
                                            placeholder="Marcus George"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="ps-4"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="phoneNumber" className="mb-4">
                                    <Form.Label className="text-white">
                                        Phone Number<span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="position-relative">
                                        <Form.Control
                                            type="tel"
                                            placeholder="91+"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            className="ps-4"
                                        />
                                    </div>
                                </Form.Group>

                                <Button type="submit" className="w-100 btn-warning fw-bold">
                                    Next
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Login;
