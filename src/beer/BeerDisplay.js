import React, { Component, Fragment } from 'react'
import Beer from './Beer'
import Axios from 'axios'
import apiUrl from '../apiConfig'
import SearchBar from '../shared/SearchBar'
import { Container, Col, Row } from 'react-bootstrap'

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
    document.getElementById('searchForm').reset()
  }

  render () {
    let beerJsx = ''
    if (this.state.beers.length > 0) {
      beerJsx = this.state.beers.map(x => (
        <Col key={x.id} sm={12} lg={4}>
          <Beer
            onClick={this.handleClick}
            id={x.id}
            name={x.name}
            description={x.description}
            imageUrl={x.image_url}
          />
        </Col>
      ))
    } else if (this.state.beers[0] === 1) {
      beerJsx = <h2>Loading...</h2>
    } else {
      beerJsx = <h2>No Beers Found</h2>
    }
    return (
      <Fragment>
        <Container fluid className='d-flex flex-row justify-content-end'>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
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
}

export default BeerDisplay
