import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
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
