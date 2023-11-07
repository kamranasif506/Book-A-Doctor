import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TbX } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../../redux/navbar/navSlice';
import { logOutAuth } from '../../redux/auth/authSlice';
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
    path: '/',
  },
  {
    name: 'Logout',
    path: '/logout',
  },
];

const Navigation = () => {
  const dispatch = useDispatch();
  const { isOpen, active } = useSelector((state) => state.navbar);
  const navigate = useNavigate();
  const linkClickHandler = (name) => {
    dispatch(navActions.setActive(name));
    dispatch(navActions.toggle());
  };

  const keyPressHandler = (event, name) => {
    if (event.key === 'Enter' || event.key === ' ') {
      linkClickHandler(name);
    }
  };

  const handleLogoutClick = () => {
    const logoutHeaders = {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    };
    dispatch(logOutAuth(logoutHeaders))
      .then((response) => {
        if (response.status === 401) {
          console.log('sda');
        } else {
          const token = localStorage.getItem('token');
          if (!token) {
            navigate('/login');
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
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

      <h1 id="title">BookDoc</h1>

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
              onClick={() => (link.name === 'Logout' ? handleLogoutClick() : linkClickHandler(link.name))}
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
