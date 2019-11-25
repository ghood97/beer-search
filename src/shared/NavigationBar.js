import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'

const NavigationBar = (props) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand><span className='h2'>Beer Search</span></Navbar.Brand>
      <Nav className='mr-auto' variant='pills'>
        <Nav.Item>
          <Nav.Link href='/'><Button variant='primary'>Home</Button></Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
