import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

const API = process.env.REACT_APP_BACKEND_URI;

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API}/api/auth/login`,
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Success");
      window.location = "/home";

    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button>Login</button>

        <p>New user? <a href="/register">Register</a></p>
      </form>
    </div>
  );
}

export default Login;