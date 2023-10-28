import React from 'react';
import { Link } from 'react-router-dom';
import { TbX } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../redux/navbar/navSlice';
import './navigation.css';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Doctors',
    path: '/doctors',
  },
  {
    name: 'Reserve',
    path: '/reserve',
  },
  {
    name: 'My reservations',
    path: '/reservations',
  },
  {
    name: 'Add doctor',
    path: '/doctors/new',
  },
  {
    name: 'Delete doctor',
    path: '/',
  },
];

const Navigation = () => {
  const dispatch = useDispatch();
  const { isOpen, active } = useSelector((state) => state.navbar);

  const linkClickHandler = (name) => {
    dispatch(navActions.setActive(name));
    dispatch(navActions.toggle());
  };

  return (
    <nav id='navigation'>
      <div
        className='hamburger'
        onClick={() => dispatch(navActions.toggle())}
      >
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>

      <h1>BookDoc</h1>

      <ul className={isOpen ? 'open' : ''}>
        <TbX
          className='icon'
          onClick={() => dispatch(navActions.toggle())}
        />
        {links.map((link) => (
          <li
            key={link.name}
            className={link.name === active ? 'active' : ''}
            onClick={() => linkClickHandler(link.name)}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
