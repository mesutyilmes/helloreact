import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Middle from './components/middle';
import AddUser from './components/AddUser';

class App extends Component {

  render() {

    return (
        <div className="container">
          
          <Navbar title="Calisanlar"/>
          <hr />
          <AddUser/>
          <Users />
          <Middle/>
        </div>
    )
  }
}

export default App;
