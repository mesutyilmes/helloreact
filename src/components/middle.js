import React, { Component } from 'react'
import UserConsumer from '../context'


export default class middle extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { yilmes } = value;
                        return (
                            <div>{yilmes}</div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
