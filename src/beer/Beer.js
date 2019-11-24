import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/beer.scss'
import { Card } from 'react-bootstrap'

const cardStyle = {
  backgroundColor: 'grey'
}

const imgStyle = {
  height: '300px',
  width: '100px'
}

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
      <Card onClick={this.handleClick} style={cardStyle} className="mb-4">
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <div className="cardText">
            {this.props.description}
          </div>
        </Card.Body>
        <Card.Img variant="bottom" src={this.props.imageUrl} style={imgStyle} className="mx-auto"/>
      </Card>
    )
  }
}

export default Beer
