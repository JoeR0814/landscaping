import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return;
  <>
    <nav className='linkBar'>
      <ul className='pageList'>
        <li className='listName'>
          <Link to='/'>Home</Link>
        </li>
        <li className='listName'>
          <Link to='/about'>About</Link>
        </li>
        <li className='listName'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  </>;
}

export default NavBar;

