import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login logic here
    console.log("Logging in with", formData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "15px", boxSizing: "border-box" }}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "15px", boxSizing: "border-box" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>

      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <p>
          No account?{" "}
          <Link to="/register" style={{ color: "#4caf50", fontWeight: "bold", textDecoration: "none" }}>
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
