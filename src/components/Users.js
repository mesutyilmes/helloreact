import React, { Component } from 'react'
import User from './User'
import UserConsumer from '../context'
class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value => {
            const { workers } = value;
            return (
              <div>
                {
                  workers.map(worker => {
                    return (
                      <User
                        key={worker.id}
                        name={worker.name}
                        salary={worker.salary}
                        department={worker.department}
                        id={worker.id}
                      />
                    )
                  })
                }
              </div>
            )
          }
        }
      </UserConsumer>
    )
  }
}

export default Users
