import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const handlesignup = () => {
    navigate("/login");
  };
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="signup-button"
            onClick={handlesignup}
          >
            Sign Up
          </button>
        </form>
        <div className="social-signup">
          <p>Or sign up with:</p>
          <div className="social-icons">
            <a href="#facebook" className="facebook">
              Facebook
            </a>
            <a href="#google" className="google">
              Google
            </a>
            <a href="#linkedin" className="linkedin">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
