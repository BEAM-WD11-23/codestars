import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const [activeBtnIndex, setActiveBtnIndex] = useState(2); // Assuming "New Post" is initially active

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveBtnIndex(0);
        break;
      case '/search':
        setActiveBtnIndex(1);
        break;
      case '/create-post':
        setActiveBtnIndex(2);
        break;
      case '/messages':
        setActiveBtnIndex(3);
        break;
      case '/notifications':
        setActiveBtnIndex(4);
        break;
      default:
        setActiveBtnIndex(null);
    }
  }, [location.pathname]);

  const handleNavClick = (index) => {
    setActiveBtnIndex(index);
  };

  return (
    <>
      <section className="Navigation">
        <ul className="nav">
          <span className="nav__indicator" style={{ left: `calc(${(activeBtnIndex * 20)}% + 10%)` }}></span>
          <li>
            <Link
              to="/"
              className={activeBtnIndex === 0 ? 'nav-item-active' : ''}
              onClick={() => handleNavClick(0)}
            >
              <i className='bx bx-home'></i>
              <span className="title">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={activeBtnIndex === 1 ? 'nav-item-active' : ''}
              onClick={() => handleNavClick(1)}
            >
              <i className='bx bx-search-alt-2'></i>
              <span className="title">Search</span>
            </Link>
          </li>
          <li>
            <Link
              to="/create-post"
              className={activeBtnIndex === 2 ? 'nav-item-active' : ''}
              onClick={() => handleNavClick(2)}
            >
              <i className='bx bx-plus-circle'></i>
              <span className="title">New Post</span>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className={activeBtnIndex === 3 ? 'nav-item-active' : ''}
              onClick={() => handleNavClick(3)}
            >
              <i className='bx bx-message-square-dots'></i>
              <span className="title">Messages</span>
              <span className="notification-bubble notification-bubble-messages">3</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={activeBtnIndex === 4 ? 'nav-item-active' : ''}
              onClick={() => handleNavClick(4)}
            >
              <i className='bx bx-bell'></i>
              <span className="title">Notifications</span>
              <span className="notification-bubble notification-bubble-notification">3</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navigation;
