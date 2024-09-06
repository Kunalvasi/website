import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button" onClick={handlelogin}>
            Login
          </button>
        </form>
        <div className="social-login">
          <p>Or login with:</p>
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
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
