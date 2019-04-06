import React, { Component } from 'react';
import Navbar from './components/Navbar';
class App extends Component {
  
  render() {
    return (
      <div className="container">
        Hello World!
        <h1>NAVBAR</h1>
        <Navbar/>
      </div>
    )
  }
}

export default App;
