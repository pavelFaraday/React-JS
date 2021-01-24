// </React.Fragment> --- When we want not to display parent div

import React, { Component } from 'react'

class Counter extends Component {
    render() { 
        return (
        <React.Fragment>
            <h1>Hello John</h1>
        </React.Fragment>
        )
    }
}
 
export default Counter;