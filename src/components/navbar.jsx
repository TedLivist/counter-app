import React, { Component } from 'react';

// This is a Stateless Functional Component
// This is often used instead of `class...extends...render()`
// when the Component returns a rather simple functionality,
// without state or methods
const NavBar = ({ totalCounters }) => {
  console.log('Navbar - Rendered')
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
}
 
export default NavBar;