import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    return <button 
    style={{background: color}} 
    className='btn' 
    onClick={onClick}>
    {text}</button>
}


// default Props
Button.defaultProps = {
    color: 'steelBlue',
}

// propTypes
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}


export default Button
