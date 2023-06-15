import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink className='nav-link' to='/'>Home </NavLink>
      <NavLink className='nav-link' to='/movies'>Movies </NavLink>
      <NavLink className='nav-link' to='/directors'>Directors </NavLink>
      <NavLink className='nav-link' to='/actors'>Actors </NavLink>
    </div>
    );
}

export default NavBar;
