import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/genre">
          <li>Genre</li>
        </Link>
        <Link to="/activity">
          <li>Activity</li>
        </Link>
        <Link to="/mood">
          <li>Mood</li>
        </Link>
        <Link to="/occasion">
          <li>Occasion</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
