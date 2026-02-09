import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post("https://tradex-application.onrender.com/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Re-enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn primary">
          Sign Up
        </button>
        <p className="switch-text">Already have an account?</p>
        <button
          type="button"
          className="btn secondary"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Signup;
