import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
    }

    styles = {
        fontSize: 14,
        fontWeight: 'bold'
    };

    // you must bind every Event to 'this' keyword with constructor function
  /*   constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this); 
    } */

    // or remake event into an arrow function
    handleIncrement = () => {
        console.log('I handle', this);
    }

    render() { 
        return (
        <React.Fragment>
            <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        )
    }

    formatCount () {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;