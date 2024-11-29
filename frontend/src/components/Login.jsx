import React, { useState } from 'react';
import backgroundImage from '../assets/loginbackground.png';
import logoImage from '../assets/logo3.png';
import '../styles/login.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await api.post('/api/auth/login', {
                email,
                password
            });
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', 'admin');
                window.alert('Login Successfully')
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div
            className="login-page"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="login-background-overlay"></div>

            <div className="login-container mx-5">
                <h2 className="mb-4">Login</h2>
                {error && <p className="text-danger">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="login-form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="login-form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <a href="/forgotpassword" className="text-decoration-none">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn btn-warning w-100">Login</button>
                </form>

                <p className="text-center mt-3">
                    Don't have an account? <a href="/register" className="text-warning text-decoration-none">Register</a>
                </p>
            </div>

            <div className="login-info text-light">
                <img src={logoImage} alt="Logo" className="login-logo" />
                <p>Aenean blandit id nisl et pretium. Sed efficitur <span>lectus ipsum, ac dapibus turpis auctor.</span></p>
            </div>
        </div>
    );
}

export default Login;