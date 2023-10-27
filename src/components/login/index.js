import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = React.useState('');
  const navigate = useNavigate();

  const navigateHomeHandler = () => {
    if (!username) return;
    navigate('/home');
  };

  return (
    <div id='login-container'>
      <div className='login-div'>
        <h1>BookDoc</h1>

        <form id='login-form'>
          <input type='text' placeholder='Enter your username...' onChange={(e) => setUsername(e.target.value)} />
          <button type='submit' onClick={navigateHomeHandler}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
