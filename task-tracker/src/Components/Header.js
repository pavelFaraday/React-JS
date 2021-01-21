import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button' 


const Header = ({title}) => {
    const myFun = () => {
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='add' onClick={myFun} />
        </header>
    )
}

// default Props
Header.defaultProps = {
    title: 'Task Tracker',
}

// propTypes
Header.propTypes = {
    title: PropTypes.string,
}


export default Header
