import React from 'react'
import PropTypes from 'prop-types'

 function Navbar(props) {
  return (
    <div>
      {props.title}
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "No title"
}

export default Navbar;
