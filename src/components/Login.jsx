import React from 'react';
import '../styles/Login.css';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/logo.png';
function Login() {
  return (
    <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <label>Email or Phone</label>
          <input type="text" placeholder="Enter your email or phone" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>

      <div className="login-info">
        <img src={logoImage} alt="Logo" className="logo" />
        <p>Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.</p>
      </div>
    </div>
  );
}

export default Login;
