import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {

      monsters: [
        {
          name: 'Frankenstien',
          id: 'adfr'
        },
        {
          name: 'Dracula',
          id: 'asc3'
        },
        {
          name: 'Zombie',
          id: '2346'
        }
      ]
  }
}
  render(){
    return (
      <div className="App">
      {
        this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      }
    </div>
    )}
}

export default App;
