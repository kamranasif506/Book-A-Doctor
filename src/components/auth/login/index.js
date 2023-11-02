import React from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { LoginAuth } from '../../../redux/auth/authSlice';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHomeHandler = () => {
    if (!email || !password) return;
    const userData = {
      user: {
        email: email,
        password
      }
    };
    dispatch(LoginAuth(userData))
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      console.error('Login failed:', error);
    });
    navigate('/');
  };

  return (
    <div id="login-container">
      <div className="login-div">
        <h1>BookDoc</h1>

        <form id="login-form">
          <input type="email" placeholder="Enter your username..." onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={navigateHomeHandler}>
            Login
          </button>
          <button type="button" onClick={() => navigate('/register')} id="auth-sec">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
