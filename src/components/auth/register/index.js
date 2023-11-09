import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { signUpAuth } from '../../../redux/auth/authSlice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorMessage = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage === 'wrong') {
      swal('Rejected', 'Try with different Account or check Connection', 'error');
    }
    if (errorMessage === 'Signed up sucessfully.') {
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
    dispatch(signUpAuth(userData));
  };

  return (
    <div id="login-container">
      <div className="login-div">
        <h1>BookDoc</h1>
        <form id="login-form" className="mb-4">
          <input
            type="email"
            placeholder="Enter your Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
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
