import React from 'react';
import './css/header.css';
import Switch from './Switch';

function Header() {
  return (
    <header className="header">
    <div className="wrapper">
      <div className="header-grid">
        <div>
          <h1>arrobitadev Dashboard</h1>
          <p className="header-total">Total Followers: 23, 004</p>
        </div>
        <Switch />
      </div>
    </div>
  </header>
  )
}

export default Header;
