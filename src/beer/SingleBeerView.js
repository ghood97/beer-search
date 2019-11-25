import React, { useState, useEffect, Fragment } from 'react'
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

const SingleBeerView = (props) => {
  const [beer, setBeer] = useState({})

  useEffect(() => {
    Axios(`${apiUrl}/${props.match.params.id}`)
      .then(res => {
        console.log(props.match.url)
        setBeer(res.data[0])
      })
      .catch(console.error)
  })

  let beerJsx = ''
  if (beer === '') {
    beerJsx = 'Loading...'
  } else {
    beerJsx =
    <Fragment>
      <h1>{beer.name}</h1>
      <h3>{beer.tagline}</h3>
      <p style={pStyle}>{beer.description}</p>
      <img style={imgStyle} src={beer.image_url} />
    </Fragment>
  }
  return (
    <div style={divStyle}>
      {beerJsx}
    </div>
  )
}

export default SingleBeerView
