import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import apiUrl from '../apiConfig'

const imgStyle = {
  height: '300px'
}

const divStyle = {
  textAlign: 'center'
}

const pStyle = {
  marginLeft: '10px',
  marginRight: '10px'
}

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
        console.log(this.props.match.url)
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
        <p style={pStyle}>{this.state.beer.description}</p>
        <img style={imgStyle} src={this.state.beer.image_url} />
      </Fragment>
    }
    return (
      <div style={divStyle}>
        {beerJsx}
      </div>
    )
  }
}

export default SingleBeerView
