import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = {
  backgroundColor: 'rgba(0, 255, 0, .5)'
}

const buttonStyle = {
  borderColor: 'blue',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '12px',
  color: 'blue',
  margin: '5px',
  outline: 'none'
}

const Header = () => (
  <div style={headerStyle}>
    <h1>Beans Love Beers</h1>
    <Link to='/'><button style={buttonStyle}>Home</button></Link>
  </div>
)

export default Header
