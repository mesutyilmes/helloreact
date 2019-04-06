import React, { Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Navbar title="User Informations"/>
        <hr/>
        <User
          name = "Mesut Yilmaz"
          department = "Developer"
          salary = "6000"
        />
        <User
          name = "Cimen Yilmaz"
          department = "Operation"
          salary = "5000"
        />
      </div>
    )
  }
}

export default App;
