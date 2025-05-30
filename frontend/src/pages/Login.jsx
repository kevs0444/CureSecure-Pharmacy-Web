import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';  // your CSS in src/styles/Login.css

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <img
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
            alt="CureSecure Logo"
            className="login-logo"
          />
        </div>
        <div className="login-right">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Login to CureSecure Pharmacy</p>
          <form>
            <div className="input-group">
              <label htmlFor="username">Email or Username</label>
              <div className="input-icon-wrapper">
                <span className="input-icon">
                  {/* Username icon (user icon SVG) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#00796b" viewBox="0 0 24 24">
                    <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </span>
                <input type="text" id="username" placeholder="Enter your email or username" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <span className="input-icon password-lock-icon">
                  {/* Lock icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.108 122.88" width="20" height="20">
                    <path
                      fill="#00796b"
                      d="M2.892,56.036h8.959v-1.075V37.117c0-10.205,4.177-19.484,10.898-26.207v-0.009
                         C29.473,4.177,38.754,0,48.966,0C59.17,0,68.449,4.177,75.173,10.901l0.01,0.009c6.721,6.723,10.898,16.002,10.898,26.207v17.844
                         v1.075h7.136c1.59,0,2.892,1.302,2.892,2.891v61.062c0,1.589-1.302,2.891-2.892,2.891H2.892c-1.59,0-2.892-1.302-2.892-2.891
                         V58.927C0,57.338,1.302,56.036,2.892,56.036L2.892,56.036z M26.271,56.036h45.387v-1.075V36.911c0-6.24-2.554-11.917-6.662-16.03
                         l-0.005,0.004c-4.111-4.114-9.787-6.669-16.025-6.669c-6.241,0-11.917,2.554-16.033,6.665c-4.109,4.113-6.662,9.79-6.662,16.03
                         v18.051V56.036L26.271,56.036z M49.149,89.448l4.581,21.139l-12.557,0.053l3.685-21.423c-3.431-1.1-5.918-4.315-5.918-8.111
                         c0-4.701,3.81-8.511,8.513-8.511c4.698,0,8.511,3.81,8.511,8.511C55.964,85.226,53.036,88.663,49.149,89.448L49.149,89.448z"
                    />
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  className="password-input"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={togglePassword}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#00796b" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#00796b" viewBox="0 0 24 24">
                      <path d="M12 6a9.77 9.77 0 018.92 5.66A9.77 9.77 0 0112 18a9.77 9.77 0 01-8.92-6.34A9.77 9.77 0 0112 6m0-2C6.48 4 1.73 7.11 0 12c1.73 4.89 6.48 9 12 9s10.27-4.11 12-9c-1.73-4.89-6.48-9-12-9zm0 5a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="register-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
