import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAuth } from '../../../redux/auth/authSlice';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const errorMessage = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage === 'Rejected') {
      setMessage('Login failed. Please check your credentials.');
    }
    if (errorMessage === 'Logged in sucessfully.') {
      navigate('/');
    }
  }, [errorMessage, dispatch]);

  const navigateHomeHandler = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const userData = {
      user: {
        email,
        password,
      },
    };
    dispatch(LoginAuth(userData))
      .then(() => {

      })
      .catch((error) => {
        setMessage(`Login failed. Error: ${error.message}`);
      });
  };

  return (
    <div id="login-container">
      <div className="login-div">
        <h1>BookDoc</h1>
        {message && <div className="error-message">{message}</div>}
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
