import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/beer.scss'

class Beer extends Component {
  constructor () {
    super()

    this.state = {
      clicked: false
    }
  }

  handleClick = (event) => {
    this.setState({ clicked: true })
  }

  render () {
    if (this.state.clicked) {
      return <Redirect to={`/${this.props.id}`}/>
    }
    return (
      <div onClick={this.handleClick} className='beerDiv'>
        <img className='beerImg' src={this.props.imageUrl} />
        <div>
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Beer
