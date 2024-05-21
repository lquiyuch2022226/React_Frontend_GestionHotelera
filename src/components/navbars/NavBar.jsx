import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('profile');
    window.location.href = '/';
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/hotels">Hotel Management</Link>
        </li>
        <li>
          <Link to="/stats">Statistics</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};