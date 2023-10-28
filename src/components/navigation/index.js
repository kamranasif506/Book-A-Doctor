import React from 'react';
import { Link } from 'react-router-dom';
import { TbX } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../redux/navbar/navSlice';
import './navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const { isOpen, active } = useSelector((state) => state.navbar);

  return (
    <nav id='navigation'>
      <div className='hamburger' onClick={() => dispatch(navActions.toggle())}>
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>

      <h1>BookDoc</h1>

      <ul className={isOpen ? 'open' : ''}>
        <TbX className='icon' onClick={() => dispatch(navActions.toggle())} />
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
