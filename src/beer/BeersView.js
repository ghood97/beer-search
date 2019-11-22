import React, { Component } from 'react'
import BeerDisplay from './BeerDisplay'

class BeersView extends Component {
  constructor () {
    super()

    this.state = {}
  }

  handleChange (event) {
    this.setState({ search: event.target.value })
  }

  render () {
    return (
      <div>
        <BeerDisplay />
      </div>
    )
  }
}

export default BeersView
