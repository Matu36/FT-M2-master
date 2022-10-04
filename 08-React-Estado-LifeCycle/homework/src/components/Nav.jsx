import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-dark bg-dark">
  <img src= {Logo} alt="Buscando" />
<p>Henry - Weather App</p>
<SearchBar onSearch={onSearch} />
</nav>
  );
};

export default Nav;
