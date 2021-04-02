import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>
      &nbsp;
      <button className="signin-button" onClick={() => openModal('login')}>Sign In</button>
    </nav>
  );
  const personalGreeting = () => (
    <div className="user-dropdown">
      <img src={window.profileIcon} className="user-icon"/>
      <ul className="dropdown-list arrow">
        <li className="dropdown-greeting">Hello, {currentUser.username}!</li>
        <li className="list-item"><Link to={`/users/${currentUser.id}`}>My Profile</Link></li>
        <li className="list-item"><Link to={`/users/${currentUser.id}`}>My Dining History</Link></li>
        <li className="list-item"><Link to={`/users/${currentUser.id}`}>My Saved Restaurants</Link></li>
        <li className="dropdown-signout" onClick={logout}>Sign Out</li>
      </ul>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;