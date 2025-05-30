import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registration.css';

const Registration = () => {
  return (
    <div className="registration-wrapper">
      <div className="registration-container">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="CureSecure Pharmacy Logo" className="logo" />
        <h2>Create an Account</h2>
        <form className="registration-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login now</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
