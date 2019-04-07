import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
class App extends Component {
  state = {
    calisanlar:  [
      {
        id : 1,
        name : "Mesut",
        department : "Developer",
        salary : "5000"
      },
      {
        id : 2,
        name : "Huseyin",
        department : "Developer",
        salary : "1000"
      },
      {
        id : 3,
        name : "Yusuf",
        department : "Retailler",
        salary : "9000"
      }
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar title="Calisanlar"/>
        <hr/>
        <Users
         workers = {this.state.calisanlar}
        />
      </div>
    )
  }
}

export default App;
