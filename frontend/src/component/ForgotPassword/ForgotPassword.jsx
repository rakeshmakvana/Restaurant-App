import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ForgotPassword.css';
import logo3 from '../../assets/logo3.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password reset link sent to your email!');
  };

  return (
    <>
      <section className="password-wrapper">
        <div className="Password-content">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={12} md={6} className="d-flex flex-wrap">
                <div className="bg-col col-12 p-5 rounded-4">
                  <h2 className="pb-2 mb-3">Forgot Password</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-5">
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
                      />
                    </div>
                    <button type="submit" className="btn btn-warning col-12 mb-2 text-light">
                      Get OTP
                    </button>
                  </form>
                </div>
              </Col>
              <Col xs={12} md={6} className="text-center">
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
    </>
  );
}

export default ForgotPassword;
