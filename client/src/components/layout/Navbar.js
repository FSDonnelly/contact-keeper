import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logoutUser();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <a href='#!' onClick={onLogout}>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const gusetLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>
          <i className='fas fa-sign-in-alt' /> Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : gusetLinks}
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
