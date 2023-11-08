import React from 'react';
import { Link } from 'react-router-dom';
import { TbX } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../redux/navbar/navSlice';
import './navigation.css';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'doctors',
    path: '/doctors',
  },
  {
    name: 'reserve',
    path: '/reserve',
  },
  {
    name: 'reservations',
    path: '/reservations',
  },
  {
    name: 'Add doctor',
    path: '/addDoctor',
  },
  {
    name: 'Delete doctor',
    path: '/doctors/delete',
  },
];

const Navigation = () => {
  const dispatch = useDispatch();
  const { isOpen, active } = useSelector((state) => state.navbar);

  const linkClickHandler = (name) => {
    dispatch(navActions.setActive(name));
    dispatch(navActions.toggle());
  };

  const keyPressHandler = (event, name) => {
    if (event.key === 'Enter' || event.key === ' ') {
      linkClickHandler(name);
    }
  };

  return (
    <nav id="navigation">
      <div
        className="hamburger"
        onClick={() => dispatch(navActions.toggle())}
        onKeyDown={(event) => keyPressHandler(event)}
        role="button"
        tabIndex={0}
        aria-label="Humburger"
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <h1>BookDoc</h1>

      <ul className={isOpen ? 'open' : ''}>
        <TbX
          className="icon"
          onClick={() => dispatch(navActions.toggle())}
          onKeyDown={(event) => keyPressHandler(event)}
          role="button"
          tabIndex={0}
          aria-label="Toggle Menu"
        />
        {links.map((link) => (
          <li
            key={link.name}
            className={link.name === active ? 'active' : ''}
          >
            <button
              type="button"
              onClick={() => linkClickHandler(link.name)}
              onKeyDown={(event) => keyPressHandler(event, link.name)}
            >
              <Link to={link.path}>{link.name}</Link>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
