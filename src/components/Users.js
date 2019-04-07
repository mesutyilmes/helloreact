import React, { Component } from 'react'
import User from './User'
class Users extends Component {
  render() {
      const {workers} = this.props;
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
                />
            )
            })
         }
      </div>
    )
  }
}
export default Users
