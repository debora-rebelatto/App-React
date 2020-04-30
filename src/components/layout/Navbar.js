import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navbar.css';

function hideSidebar() {
  document.getElementById("sidebar").classList.toggle("hide-sidebar");
  //document.getElementById("content").classList.toggle("new-content");
}

function Navbar() {
  return (
    <div className='navbar'>
      <button onClick={hideSidebar}>Click me</button>
      <Link to="/counter">counter</Link>
      <Link to="/swapi">Swapi</Link>
      <Link to="/content">Component</Link>
      <Link to="/jokes">Jokes</Link>
      <Link to="/products">Products</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/secondform">Second Form</Link>
    </div >
  )
}

export default Navbar;