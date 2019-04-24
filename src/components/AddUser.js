import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context'

var uniqid = require('uniqid');
const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});

class AddUser extends Component {
    state = {
        visible: false,
        department: "",
        name: "",
        salary: ""
    }
    changeVisibilty = (e) => {
        this.setState(
            {
                visible: !this.state.visible
            }
        )
    }

    /*
    changeName = (e) => {
        this.setState({
            name : e.target.value
        })
        
    }
    changeDepartment = (e) => {
        this.setState({
            department : e.target.value
        })
    }
    changeSalary = (e) => {
        this.setState({
            salary : e.target.value
        })
    }
    */

    changeInput = (e) => {
        //console.log([e.target.name])
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = (dispatche,e) => {
        e.preventDefault();
        console.log(this.state.name);
        const { name, department, salary } = this.state;

        const newUser = {
            id: uniqid(),
            name: name,
            salary: salary,
            department: department
        }
        //console.log(newUser)
        dispatche({ types: "ADD_USER", payload: newUser });
    }
    render() {
        const { visible, name, department, salary } = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatche } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <button onClick={this.changeVisibilty} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                                <Animation pose={visible ? "visible" : "hidden"}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add User Form</h4>
                                            <div className="card-body">
                                                <form onSubmit={this.addUser.bind(this,dispatche)}>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text" name="name" id="id" placeholder="Enter Name" className="form-control" value={name} onChange={this.changeInput} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="department">Department</label>
                                                        <input type="text" name="department" id="department" placeholder="Enter Department" className="form-control" value={department} onChange={this.changeInput} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="salary">Salary</label>
                                                        <input type="text" name="salary" id="department" placeholder="Enter Salary" className="form-control" value={salary} onChange={this.changeInput} />
                                                    </div>
                                                    <button type="submit" className="btn btn-danger btn-block">Add User</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Animation>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default AddUser;
