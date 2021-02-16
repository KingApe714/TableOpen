import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import LogoImg from '../../../app/assets/images'



const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>
      &nbsp;
      <button className="signin-button" onClick={() => openModal('login')}>Sign In</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
      <button className="header-button" onClick={logout}>Log</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;