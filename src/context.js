import React, { Component } from 'react'


const UserContext = React.createContext();

const reduceret = (state, action) => {
    switch (action.types) {
        case "DELETE_USER":
            return {
                ...state,
                workers: state.workers.filter(workers => action.payload !== workers.id)
            }
        case "ADD_USER":
            console.log(action.payload)
            return{
                /*
                ...state,
                workers : state.workers.concat(action.payload)
                */
               ...state,
               workers : [...state.workers,action.payload]
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
            },
            {
                id: 4,
                name: "Firat Kara",
                department: "Scherif",
                salary: "3000"
            },
            {
                id: 5,
                name: "Mustafa Yilmaz",
                department: "Resistance",
                salary: "3000"
            }
        ],
        yilmes: "Hello Abi",

        dispatche: action => {
            this.setState(
                state => reduceret(state, action)
            )
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