import React, { Component } from 'react'


const UserContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                workers: state.workers.filter(workers => action.payload !== workers.id)
            }
        default:
            return state
    }
}
export class UserProvider extends Component {
    state = {
        workers: [
            {
                id: 1,
                name: "Mesut Yilmaz",
                department: "Developer",
                salary: "7700"
            },
            {
                id: 2,
                name: "Huseyin",
                department: "Developer",
                salary: "1000"
            },
            {
                id: 3,
                name: "Yusuf",
                department: "Retailler",
                salary: "9000"
            }
        ],
        yilmes: "Hello Abi",

        dispatche : action => {
            this.setState(state => reducer(state,action))
          }
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;