import React, { useState } from 'react';
import './Login.css';

function Login() {
  // State to store form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    
    // Simple validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would typically send data to your backend
    console.log('Login attempt:', { email, password });
    alert('Login functionality would go here!');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Please sign in to your account</p>
        
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        {/* Additional Links */}
        <div className="login-footer">
          <a href="#forgot">Forgot your password?</a>
          <p>Don't have an account? <a href="#signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;