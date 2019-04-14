import React, { Component } from 'react'


const UserContext = React.createContext();

export class UserProvider extends Component {
    state = {
        workers: [
            {
                id: 1,
                name: "Mesut",
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
        yilmes :"Hello Abi"
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