import React, { useState } from 'react';
import './Login.css';
import loginImage from './assests/images/iiitb.jpeg'; // Replace with your image path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (email === 'admin@gmail.com' && password === '1234') {
      // Successful login
      // Redirect to DomainList component
      window.location.href = '/home';
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <div className="navbar"><h1 align="center"> Admin Login</h1></div>
     <img src={loginImage} alt="Login" className="login-image" /> {/* Image added here */}
      <div className="center-container">
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
          {/* Display error message */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
