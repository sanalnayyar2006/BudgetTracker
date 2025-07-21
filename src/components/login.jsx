import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      if (onLogin) onLogin();
    } catch (err) {
      setError(err.message || (isSignUp ? 'Sign up failed' : 'Invalid email or password'));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
        <p>{isSignUp ? 'Sign up for a new account' : 'Please sign in to your account'}</p>
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

          {/* Remember Me Checkbox (only for login) */}
          {!isSignUp && (
            <div className="checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
          )}

          {/* Error Message */}
          {error && <div className="error">{error}</div>}

          {/* Login/Sign Up Button */}
          <button type="submit" className="login-btn">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Additional Links */}
        <div className="login-footer">
          {!isSignUp && <a href="#forgot">Forgot your password?</a>}
          <p>
            {isSignUp ? (
              <>Already have an account?{' '}
                <a href="#login" onClick={e => { e.preventDefault(); setIsSignUp(false); setError(''); }}>Sign in</a>
              </>
            ) : (
              <>Don't have an account?{' '}
                <a href="#signup" onClick={e => { e.preventDefault(); setIsSignUp(true); setError(''); }}>Sign up</a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;