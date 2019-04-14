import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Middle from './components/middle';

class App extends Component {

  render() {

    return (
        <div className="container">
          
          <Navbar title="Calisanlar"/>
          <hr />
          <Users />
          <Middle/>
        </div>
    )
  }
}

export default App;
