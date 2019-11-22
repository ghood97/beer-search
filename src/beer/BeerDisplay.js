import React, { Component } from 'react'
import Beer from './Beer'
import SearchBar from '../shared/SearchBar'
import Axios from 'axios'
import apiUrl from '../apiConfig'

const displayContainer = {
  display: 'flex',
  flexDirecton: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'start',
  margin: '5px'
}

class BeerDisplay extends Component {
  constructor () {
    super()
    this.state = {
      beers: [],
      search: ''
    }
  }

  componentDidMount () {
    Axios(apiUrl)
      .then(res => {
        this.setState({ beers: res.data })
      })
      .catch(console.error)
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.search !== '') {
      Axios(`${apiUrl}?beer_name=${this.state.search}`)
        .then(res => {
          this.setState({ beers: res.data })
        })
        .catch(console.error)
    }
  }

  render () {
    let beerJsx = ''
    if (this.state.beers.length > 0) {
      beerJsx = this.state.beers.map(x => (
        <Beer
          onClick={this.handleClick}
          key={x.id}
          id={x.id}
          name={x.name}
          description={x.description}
          imageUrl={x.image_url}
        />
      ))
    } else if (this.state.beers[0] === 1) {
      beerJsx = <h2>Loading...</h2>
    } else {
      beerJsx = <h2>No Beers Found</h2>
    }
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div style={displayContainer}>
          {beerJsx}
        </div>
      </div>
    )
  }
}

export default BeerDisplay
