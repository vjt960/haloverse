import { NavLink } from 'react-router-dom';
import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header_main">
      <h1>HALOVERSE NETWORK</h1>
      <nav className="header_nav">
        <NavLink className="header_nav-link" exact to="/">
          HOME
        </NavLink>
        <NavLink className="header_nav-link" exact to="/halo_5">
          HALO 5
        </NavLink>
        <NavLink className="header_nav-link" exact to="/halo_wars_2">
          HALO WARS 2
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
