import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="site-navbar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" className={({ isActive }) => isActive ? 'active' : ''}>
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
