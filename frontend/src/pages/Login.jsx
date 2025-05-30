import React, { useState } from "react";
import logo from "../assets/logo.png"; // adjust the path as needed

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="CureSecure Logo"
          style={{ width: "140px", marginBottom: "30px" }}
        />
        <h2 style={{ color: "#008080", marginBottom: "25px", fontWeight: "600" }}>
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: "18px",
              borderRadius: "6px",
              border: "1.5px solid #ccc",
              fontSize: "16px",
              transition: "border-color 0.3s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#008080")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: "25px",
              borderRadius: "6px",
              border: "1.5px solid #ccc",
              fontSize: "16px",
              transition: "border-color 0.3s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#008080")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#008080",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#006666")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#008080")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
