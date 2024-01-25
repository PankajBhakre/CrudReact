import React, { Component } from 'react';

class Classstate extends Component {
    constructor() {
        super()
        this.state = {
          message: 'Please Help to Subscribe'
        }
    }
    
    changeMessage() {
        this.setState( {
        message: 'Thank You for Subscribing' 
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Classstate;