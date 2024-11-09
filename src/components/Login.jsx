// import React from 'react';
// import '../styles/Login.css';
// import backgroundImage from '../assets/background.png';
// import logoImage from '../assets/logo.png';
// function Login() {
//   return (
//     <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="login-container">
//         <h2>Login</h2>
//         <form className="login-form">
//           <label>Email or Phone</label>
//           <input type="text" placeholder="Enter your email or phone" />

//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" />

//           <div className="form-options">
//             <label>
//               <input type="checkbox" /> Remember Me
//             </label>
//             <a href="/forgot-password">Forgot Password?</a>
//           </div>

//           <button type="submit">Login</button>
//         </form>

//         <p className="register-link">
//           Don't have an account? <a href="/register">Register</a>
//         </p>
//       </div>

//       <div className="login-info">
//         <img src={logoImage} alt="Logo" className="logo" />
//         <p>Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.</p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Login.css';
// import backgroundImage from '../assets/background.png';
// import logoImage from '../assets/logo.png';

// function Login() {
//   return (
//     <div
//       className=" login-page d-flex justify-content-center align-items-center vh-100"
//       style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
//     >
//       <div className="login-container p-4 rounded bg-dark text-light" style={{ maxWidth: '400px' }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Email or Phone</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter your email or phone"
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter your password"
//             />
//             {/* <small className="text-danger">Incorrect Password.</small> */}
//           </div>

//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <div className="form-check">
//               <input type="checkbox" className="form-check-input" id="rememberMe" />
//               <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
//             </div>
//             <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
//           </div>

//           <button type="submit" className="btn btn-warning w-100">Login</button>
//         </form>

//         <p className="text-center mt-3">
//           Don't have an account? <a href="/register" className="text-warning text-decoration-none">Register</a>
//         </p>
//       </div>

//       {/* <div className="position-absolute bottom-0 end-0 p-3 text-light">
//         <img src={logoImage} alt="Logo" style={{ width: '100px' }} />
//         <p className="mt-2">
//           Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.
//         </p>
//       </div> */}
//       <div className="login-info text-light">
//         <img src={logoImage} alt="Logo" className="logo" />
//         <p>Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.</p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/logo.png';

function Login() {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="background-overlay"></div>

      <div className="login-container">
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email or Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email or phone"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-warning w-100">Login</button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <a href="/register" className="text-warning text-decoration-none">Register</a>
        </p>
      </div>

      <div className="login-info text-light">
        <img src={logoImage} alt="Logo" className="logo" />
        <p>Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.</p>
      </div>
    </div>
  );
}

export default Login;

