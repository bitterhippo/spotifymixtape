import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function FooterNav() {
  return (
    <nav>
      <ul className="footernav-links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/library">
          <li>Your Library</li>
        </Link>
      </ul>
    </nav>
  );
}

export default FooterNav;
