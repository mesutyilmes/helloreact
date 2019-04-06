import React, { Component } from 'react'
import PropTypes from 'prop-types'


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

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}
User.defaultProps = {
    name : "Bilgi yok.",
    salary : "Maas belirlenmedi."
}
export default User;