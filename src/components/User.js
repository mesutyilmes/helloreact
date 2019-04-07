import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class User extends Component {
    state = {isVisible : true}
  render() {
    //Destructing
    const {name,department,salary} = this.props
    const {isVisible} = this.state
    return (
        <div className="col-md-8 mb-4">
            <div className="card-header d-flex justify-content-between">
                <h4 className="d-inline">{name}</h4>
                <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
            </div>
            {
                isVisible ? 
                <div className="card-body">
                <p className="card-text">Maas : {salary}</p>
                <p className="card-text">Department : {department}</p>
                </div>
                : null
            }
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