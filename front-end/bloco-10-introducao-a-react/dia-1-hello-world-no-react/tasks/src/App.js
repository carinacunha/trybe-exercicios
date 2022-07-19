import React from 'react'
import './App.css';

const Task = (value) => {
  return (
    <li key = {value}>{value}</li>
  );
}

const tasks = ['Crossfit', 'Treino BMU', 'Passear com o cachorro', 'Fazer almoço', 'Trybe' ]
class App extends React.Component {
  render() {
    return (
      <ul>{tasks.map(element => Task(element))} </ul>
    );
  }
  
}

export default App;
