// src/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar({updateSearch}){
  return (
    // <nav>
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/favorites">Favorites</Link></li>
    //   </ul>
    // </nav>
    <nav style={{display:'flex'}}>
      <SearchBar updateSearch={updateSearch}></SearchBar>
      <button><a Link to='/'>Home</a></button>
      <button><a Link to='/favorites'>Favorites</a></button>
    </nav>
  );
};

export default Navbar;
