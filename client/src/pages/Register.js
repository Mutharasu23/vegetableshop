import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/register", {
        name,
        email,
        password
      });

      alert("Registered Successfully");
      window.location = "/";

    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="auth-container">

      <form onSubmit={handleSubmit} className="auth-box">

        <h2>Register</h2>

        <input
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />

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

        <button>Register</button>

        <p>Already have account? <a href="/">Login</a></p>

      </form>

    </div>
  );
}

export default Register;
