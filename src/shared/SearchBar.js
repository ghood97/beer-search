import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class SearchBar extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      <div>
        <Form id='searchForm' inline onSubmit={this.props.handleSubmit}>
          <Form.Control inline="true" onChange={this.props.handleChange} type="text" placeholder='Ex. Brown Ale'/>
          <Button variant='primary' type='submit'>Search</Button>
        </Form>
      </div>
    )
  }
}

export default SearchBar
