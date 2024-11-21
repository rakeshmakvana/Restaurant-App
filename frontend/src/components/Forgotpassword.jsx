import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo3 from '../assets/logo3.png';
import '../styles/forgotpassword.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await api.post('/api/auth/forgot-password', { email });
            window.alert('Otp Sent Succesfully to Your Email');
            navigate('/otpemail');
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section className="password-wrapper">
            <div className="Password-content">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} lg={6} className="d-flex flex-wrap">
                            <div className="bg-col col-12 p-5 rounded-4">
                                <h2 className="pb-2 mb-3">Forgot Password</h2>
                                {error && <p className="text-danger">{error}</p>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label mb-2">
                                            Email<span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your Email"
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-warning col-12 mb-2 text-dark">
                                        Get OTP
                                    </button>
                                </form>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="text-center d-none d-lg-block">
                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                                <div className="d-flex flex-wrap justify-content-center p-3 align-items-center Pass-logo">
                                    <img src={logo3} alt="Logo3" />
                                </div>
                                <div className="d-flex text-center align-items-center pass-tagline">
                                    <h3>
                                        Aenean blandit id nisl et pretium. Sed efficitur{' '}
                                        <span>lectus ipsum, ac dapibus turpis auctor</span>
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Forgotpassword;