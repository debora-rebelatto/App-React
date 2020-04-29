import React from 'react';
import '../../styles/navbar.css';

function hideSidebar () {
  document.getElementById("sidebar").classList.toggle("hide-sidebar");
  document.getElementById("content").classList.toggle("new-content");
}

function Navbar() {
  return (
    <div className='navbar'>
      <button onClick={hideSidebar}>Click me</button>
      <h1>This is the navbar</h1>
    </div>
  )
}

export default Navbar;