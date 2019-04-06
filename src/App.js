import React, { Component } from 'react';
import User from './components/User';
import './App.css';

class App extends Component {
  
  render() {
    const myName = "Mesut";
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>Mesut</h2>
        <h3>Cimen</h3>
        <h4>{myName.toUpperCase()}</h4>
        <div>
          <h1>USER COMPONENT</h1>
           <User/>
        </div>
      </div>
      
    );
  }
}

export default App;
