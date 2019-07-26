import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header_main">
      <h1>Halo-verse Network</h1>
      <nav className="header_nav">
        <NavLink className="header_nav-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="header_nav-link" exact to="/halo_5">
          Halo 5
        </NavLink>
        <NavLink className="header_nav-link" exact to="/halo_wars_2">
          Halo Wars 2
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
