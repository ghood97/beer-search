import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBar = () => (
  <div>
    <Form id='searchForm' inline onSubmit={this.props.handleSubmit}>
      <Form.Control size="lg" inline="true" onChange={this.props.handleChange} type="text" placeholder='Ex. Brown Ale'/>
      <Button size="lg" variant='primary' type='submit'>Search</Button>
    </Form>
  </div>
)

export default SearchBar
