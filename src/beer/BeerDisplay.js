import React, { useState, useEffect, Fragment } from 'react'
import Beer from './Beer'
import Axios from 'axios'
import apiUrl from '../apiConfig'
import SearchBar from '../shared/SearchBar'
import { Container, Col, Row } from 'react-bootstrap'

const BeerDisplay = () => {
  const [beers, setBeers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    Axios(apiUrl)
      .then(res => {
        setBeers(res.data)
      })
      .catch(console.error)
  }, [])

  const handleChange = (event) => {
    event.persist()
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.persist()
    if (search !== '') {
      Axios(`${apiUrl}?beer_name=${search}`)
        .then(res => {
          setBeers(res.data)
        })
        .catch(console.error)
    }
    document.getElementById('searchForm').reset()
  }

  let beerJsx = ''
  if (beers.length > 0) {
    beerJsx = beers.map(x => (
      <Col key={x.id} sm={12} lg={4}>
        <Beer
          id={x.id}
          name={x.name}
          description={x.description}
          imageUrl={x.image_url}
        />
      </Col>
    ))
  } else if (beers[0] === 1) {
    beerJsx = <h2>Loading...</h2>
  } else {
    beerJsx = <h2>No Beers Found</h2>
  }
  return (
    <Fragment>
      <Container fluid className='d-flex flex-row justify-content-end mt-2'>
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Container>
      <Container className='mt-5'>
        <Row>
          {beerJsx}
        </Row>
      </Container>
    </Fragment>
  )
}

export default BeerDisplay
