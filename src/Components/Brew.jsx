import React from 'react'
import PropTypes from 'prop-types'

function Brew(props) {
  return (
    <div>
      <hr/>
      <h3>{props.name}</h3>
      <h3>{props.flavor}</h3>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <hr/>
    </div>
  )
}

Brew.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string
}

export default Brew
