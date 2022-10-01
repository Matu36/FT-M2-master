import React from 'react';
import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
     <div className="App">
      {/*<div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
  <hr /> */}
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      
    </div>
    </div>
  );
}

export default App;
