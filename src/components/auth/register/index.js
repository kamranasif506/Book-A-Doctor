import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const navigateHomeHandler = () => {
    if (!username || !email) return;
    navigate('/');
  };

  return (
    <div id="login-container">
      <div className="login-div">
        <h1>BookDoc</h1>

        <form id="login-form">
          <input
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={navigateHomeHandler}>
            Sign up
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            id="auth-sec"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
