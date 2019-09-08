import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <span>
        <h4>
          <Link to="/">Home</Link>
          |  
          <Link to="/brewlist">Brew List</Link>
        </h4>
      </span>
    </nav>
  )
}

export default Header
