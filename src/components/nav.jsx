import React from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLink to='/' className="brand-logo left">Home</NavLink>
        <ul className="right">
          <li><NavLink to='/projects/create'>Add new project</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;