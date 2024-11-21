import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import clock from '../assets/clock.png';
import logo3 from '../assets/logo3.png';
import '../styles/otpemail.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Otpemail = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        setError('');

        try {
            await api.post('/api/auth/reset-password', { otp: otpCode });
            window.alert('Otp Verified Successfully');
            navigate('/resetpassword',{ state: otpCode });
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid OTP. Please try again.');
        }
    };

    return (
        <section className='otp-wrapper'>
            <div className="otp-content">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} lg={6} className="d-flex flex-wrap justify-content-center">
                            <div className="bg-col col-12 p-5 rounded-4">
                                <h2>Enter OTP</h2>
                                <p className="otp-instruction">A Verification Code Has Been Sent To XXX98. Enter The Code Below.</p>
                                {error && <p className="text-danger">{error}</p>}
                                <form onSubmit={handleSubmit}>
                                    <div className="otp-input-wrapper mb-3 d-flex justify-content-between">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleChange(e, index)}
                                                className="otp-input"
                                                id={`otp-input-${index}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="timer d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex align-items-center">
                                            <img src={clock} alt="watch" className="timer-icon" />
                                            <h2 className="timer-text mt-2">00:30 sec</h2>
                                        </div>
                                        <h3 className="resend-link">Resend OTP</h3>
                                    </div>
                                    <button type="submit" className="btn btn-warning col-12 text-dark">
                                        Verify
                                    </button>
                                </form>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="text-center d-none d-lg-block">
                            <div className="otp-logo">
                                <img src={logo3} alt="Logo3" />
                            </div>
                            <div className="otp-tagline">
                                <h3>
                                    Aenean blandit id nisl et pretium. Sed efficitur{' '}
                                    <span>lectus ipsum, ac dapibus turpis auctor</span>
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Otpemail;
