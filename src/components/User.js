import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'

class User extends Component {
    state = { isVisible: true }

    onClickEve(number, name, e) {
        this.setState({ isVisible: !this.state.isVisible });
        console.log(this.state);
    }
    sil = (dispatche,e) => {
        const {id} = this.props;
        dispatche({type:"DELETE_USER",payload:id});  

    }

    render() {
        //Destructing
        const { name, department, salary } = this.props
        const { isVisible } = this.state
        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatche} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card-header d-flex justify-content-between">
                                    <h4 className="d-inline" onClick={this.onClickEve.bind(this, 34, "Mesut")}>{name}</h4>
                                    <i onClick={this.sil.bind(this,dispatche)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
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
            </UserConsumer>
        )

    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}
User.defaultProps = {
    name: "Bilgi yok.",
    salary: "Maas belirlenmedi."
}
export default User;