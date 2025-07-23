import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        to="/budget"
        className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}
      >
        Budget Tracker
      </NavLink>
      <NavLink
        to="/debt"
        className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}
      >
        Debt
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}
      >                  
        Courses
      </NavLink>
    </nav>
  );
}

export default Navigation;