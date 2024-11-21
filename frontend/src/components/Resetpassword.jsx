import React, { useState } from 'react';
import backgroundImage from '../assets/loginbackground.png';
import logoImage from '../assets/logo3.png';
import '../styles/resetpassword.css';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const Resetpassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const otp = useLocation();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await api.post('/api/auth/reset-password', {
                newPassword, confirmPassword, passOtp: otp.state
            });
            if (response.status === 200) {
                window.alert("Password Reset Successfully");
                navigate('/login');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            setError(
                error.response?.data?.message || "An error to password. Please try again."
            );
        }
    };

    return (
        <div
            className="login-page"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="login-background-overlay"></div>

            <div className="login-container mx-5">
                <h2 className="mb-4">Reset Password</h2>
                {error && <p className="text-danger">{error}</p>}
                <form onSubmit={handleResetPassword}>
                    <div className="mb-3">
                        <label className="form-label">Enter new password</label>
                        <div className="input-group">
                            <input
                                type='password'
                                className="form-control"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <div className="input-group">
                            <input
                                type='password'
                                className="form-control"
                                placeholder="Enter confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-warning w-100">
                        Reset Password
                    </button>
                </form>
            </div>

            <div className="login-info text-light">
                <img src={logoImage} alt="Logo" className="login-logo" />
                <p>
                    Aenean blandit id nisl et pretium. Sed efficitur <span>lectus ipsum, ac dapibus turpis auctor.</span>
                </p>
            </div>
        </div>
    );
};

export default Resetpassword;
