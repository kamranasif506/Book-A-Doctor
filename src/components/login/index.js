import React from 'react';
import './login.css';

const LoginPage = () => {
  return (
    <div id='login-container'>
      <div className='login-div'>
        <h1>BookDoc</h1>

        <form id='login-form'>
          <input type='text' placeholder='Enter your username...' />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
