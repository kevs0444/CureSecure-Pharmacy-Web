import React, { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "staff", // default role, or dropdown to select
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to send registration data to backend API
    console.log("Registration data submitted:", formData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="staff">Staff</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" style={{ marginTop: "10px", width: "100%" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
