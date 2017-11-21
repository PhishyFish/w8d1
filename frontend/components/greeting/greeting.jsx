import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <nav className="greeting">
    <h2 className="header-name">Hello, {currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </nav>
);

const sessionLinks = () => (
  <nav className="session-buttons">
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
