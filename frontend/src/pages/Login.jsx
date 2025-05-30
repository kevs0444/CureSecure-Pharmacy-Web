import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="CureSecure Pharmacy Logo" className="logo" />
        <h2>Welcome to CureSecure Pharmacy</h2>
        <form>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn-login">Login</button>
        </form>
        <p className="register-text">
          Don't have an account? <Link to="/register">Register now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
