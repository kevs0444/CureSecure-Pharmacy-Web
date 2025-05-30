import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registration.css';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="registration-wrapper">
      <div className="registration-container">
        <div className="registration-left">
          <img
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
            alt="CureSecure Pharmacy Logo"
            className="logo"
          />
        </div>
        <div className="registration-right">
          <h2>Create an Account</h2>
          <form className="registration-form">
            <div className="input-wrapper">
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="input-wrapper">
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-wrapper password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
                className="password-input"
              />
              <button
                type="button"
                className={`password-toggle-btn ${showPassword ? 'show' : 'hide'}`}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#00796b">
                    <path d="M12 6a9.77 9.77 0 0 1 8.3 4.9 9.72 9.72 0 0 1 0 7.9A9.77 9.77 0 0 1 12 18a9.77 9.77 0 0 1-8.3-4.9 9.72 9.72 0 0 1 0-7.9A9.77 9.77 0 0 1 12 6Zm0 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
                    <circle cx="12" cy="12" r="2" fill="#004d40" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#00796b">
                    <path d="M12 4.5c-5.05 0-9.28 3.2-11 7.5 1.72 4.3 5.95 7.5 11 7.5s9.28-3.2 11-7.5c-1.72-4.3-5.95-7.5-11-7.5Zm0 13a5.5 5.5 0 1 1 5.5-5.5A5.51 5.51 0 0 1 12 17.5Zm0-9a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5Z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="input-wrapper password-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                required
                className="password-input"
              />
              <button
                type="button"
                className={`password-toggle-btn ${showConfirmPassword ? 'show' : 'hide'}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#00796b">
                    <path d="M12 6a9.77 9.77 0 0 1 8.3 4.9 9.72 9.72 0 0 1 0 7.9A9.77 9.77 0 0 1 12 18a9.77 9.77 0 0 1-8.3-4.9 9.72 9.72 0 0 1 0-7.9A9.77 9.77 0 0 1 12 6Zm0 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
                    <circle cx="12" cy="12" r="2" fill="#004d40" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#00796b">
                    <path d="M12 4.5c-5.05 0-9.28 3.2-11 7.5 1.72 4.3 5.95 7.5 11 7.5s9.28-3.2 11-7.5c-1.72-4.3-5.95-7.5-11-7.5Zm0 13a5.5 5.5 0 1 1 5.5-5.5A5.51 5.51 0 0 1 12 17.5Zm0-9a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5Z" />
                  </svg>
                )}
              </button>
            </div>

            <button type="submit" className="register-btn">Register</button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Login now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
