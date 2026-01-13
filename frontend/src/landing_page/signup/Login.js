import React from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>

        <button type="submit" className="btn primary">
          Login
        </button>

        <p className="switch-text">
          Don’t have an account?
        </p>

        <button
          type="button"
          className="btn secondary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;