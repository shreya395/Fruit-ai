import React, { useState } from "react";
import './Login.css'; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFingerprint, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dummyUser = {
    email: "testuser@example.com",
    password: "password123"
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email === dummyUser.email && password === dummyUser.password) {
        alert("Login successful!");
        window.location.href = "/home";
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>
          By signing in you are agreeing to our <br></br><a href="/terms">Term and privacy policy</a>
        </p>
        <div className="form-toggle">
          <span className="active">Login</span> | <span>Register</span>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> RememberPassword 
            </label>
            <a href="/forgot-password" className="forgot-password">Forget password</a>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <a href="#" className="facebook-icon" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="instagram-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="pinterest-icon" aria-label="Pinterest">
              <FontAwesomeIcon icon={faPinterest} size="2x" />
            </a>
            <a href="#" className="linkedin-icon" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
        <div className="fingerprint-login">
          <div className="fingerprint-icon-box">
            <FontAwesomeIcon icon={faFingerprint} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
