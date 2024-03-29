import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { loginAuth } from '../../../redux/auth/authSlice';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorMessage = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage === 'Rejected') {
      swal('Rejected', 'You need to try again', 'error');
    }
    if (errorMessage === 'Logged in sucessfully.') {
      navigate('/');
    }
  }, [errorMessage, dispatch, navigate]);

  const navigateHomeHandler = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const userData = {
      user: {
        email,
        password,
      },
    };
    dispatch(loginAuth(userData))
      .then(() => {

      })
      .catch(() => {

      });
  };

  return (
    <div id="login-container">
      <div className="login-div">
        <h1>BookDoc</h1>
        <form id="login-form" className="mb-4">
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
