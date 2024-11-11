import React, { useState } from 'react';
import './Otp.css';
import { Col, Container, Row } from 'react-bootstrap';
import clock from '../../assets/clock.png';
import logo3 from '../../assets/logo3.png';

function Otp() {
    const [otp, setOtp] = useState(['5', '2', '3', '4', '5', '6']);
    const handleChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        alert(`OTP Entered: ${otpCode}`);
    };

    return (
        <>
            <section className='otp-wrapper'>
                <div className="otp-content">
                    <Container>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col xs={12} md={6} className="d-flex flex-wrap justify-content-center">
                                <div className="bg-col col-12 p-5 rounded-4">
                                    <h2>Enter OTP</h2>
                                    <p className="otp-instruction">A Verification Code Has Been Sent To XXX98. Enter The Code Below.</p>
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
                                                <img src={clock} alt="watch" className="text-light" />
                                                <h2 className="timer-text">00:30sec</h2>
                                            </div>
                                            <h3 className="resend-link">Resend OTP</h3>
                                        </div>
                                        <button type="submit" className="btn btn-warning col-12 text-light">
                                            Verify
                                        </button>
                                    </form>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="text-center">
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
        </>
    );
}

export default Otp;
