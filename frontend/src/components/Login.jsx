import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="background-overlay"></div>

      <div className="login-container">
        <h2 className="text-center mb-4">Reset Password</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Enter new password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter new password"
              />
              <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter confirm password"
              />
              <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div><br></br>

          <button type="submit" className="btn btn-warning w-100">
            Reset Password
          </button>
        </form>
      </div>

      <div className="login-info text-light">
        <img src={logoImage} alt="Logo" className="logo" />
        <p>
          Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.
        </p>
      </div>
    </div>
  );
}

export default Login;
