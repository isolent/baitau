import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to={`/`}>
        <img src="/images/logo.png" alt="Logo" style={{ width: '40%' }} />
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;