import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            {/* inline Styles */}
            <h1 style={{color: 'red', border: '1px solid blue', background: 'black' }}>{title}</h1>

            {/* Internal Styles */}
            <p style={ParaStyle}>I am Styled too</p>
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

// Internal Styles
const ParaStyle = {
    color: 'blue',
    fontWeight: 'bold'
}


export default Header
