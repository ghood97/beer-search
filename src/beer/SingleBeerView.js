import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import apiUrl from '../apiConfig'

class SingleBeerView extends Component {
  constructor () {
    super()

    this.state = {
      beer: ''
    }
  }

  componentDidMount () {
    Axios(`${apiUrl}/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ beer: res.data[0] })
      })
      .catch(console.error)
  }

  render () {
    let beerJsx = ''
    if (this.state.beer === '') {
      beerJsx = 'Loading...'
    } else {
      beerJsx =
      <Fragment>
        <h1>{this.state.beer.name}</h1>
        <h3>{this.state.beer.tagline}</h3>
        <ul>
          <li>{this.state.beer.description}</li>
        </ul>
      </Fragment>
    }
    return (
      <div>
        {beerJsx}
      </div>
    )
  }
}

export default SingleBeerView
