import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1 className='title'>Pokedex</h1>
        <Pokedex pokemons={pokemons}/>
      </div>
    )
  }
}

export default App;
