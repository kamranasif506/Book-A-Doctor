import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav id='navigation'>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      <h1>BookDoc</h1>

      <ul>
        <li>
          <Link to='/doctors'>Doctors</Link>
        </li>
        <li>
          <Link to='/reserve'>Reserve</Link>
        </li>
        <li>
          <Link to='/reservations'>My reservations</Link>
        </li>
        <li>
          <Link to='/doctors/new'>Add doctor</Link>
        </li>
        <li>
          <Link to='/'>Delete doctor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
