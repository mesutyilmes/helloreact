import React, { Component } from 'react'

 class User extends Component {
  render() {
    //Destructing
    const {name} = this.props
    return (
      <div>
        <ul>
            <li>Name : {name}</li>
            <li>Department : {this.props.department}</li>
            <li>Salary : {this.props.salary}</li>
        </ul>
        <hr/>
      </div>
    )
  }
}
export default User;