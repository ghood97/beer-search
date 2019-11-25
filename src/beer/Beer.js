import React, { useState } from 'react'
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

const Beer = (props) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (event) => {
    setClicked(true)
  }

  if (clicked) {
    return <Redirect to={`/${props.id}`}/>
  }
  return (
    <Card onClick={handleClick} style={cardStyle} className="mb-4">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <div className="cardText">
          {props.description}
        </div>
      </Card.Body>
      <Card.Img variant="bottom" src={props.imageUrl} style={imgStyle} className="mx-auto"/>
    </Card>
  )
}

export default Beer
