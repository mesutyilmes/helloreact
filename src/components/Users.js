import React, { Component } from 'react'
import User from './User'
import PropTypes from 'prop-types'

class Users extends Component {
  render() {
      const {workers,deleteUser} = this.props;
      console.log(workers);
    return (
      <div>
        {
        workers.map(worker =>{
            return (
                <User
                //Componentlar Arası İletişim (Props Drilling)
                    key = {worker.id}
                    name = {worker.name}
                    salary = {worker.salary}
                    department = {worker.department}
                    kullaniciSil = {deleteUser}
                    id = {worker.id}
                />
            )
            })
         }
      </div>
    )
  }
}

Users.propTypes = {
  workers : PropTypes.array.isRequired,
  deleteUser : PropTypes.func.isRequired
}
export default Users
