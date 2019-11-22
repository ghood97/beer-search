import React, { Component } from 'react'

const searchStyles = {
  searchDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '5px'
  },
  searchInput: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    fontSize: '20px',
    outline: 'none'
  },
  searchButton: {
    fontSize: '20px',
    borderRadius: '20px',
    outline: 'none'
  }
}

class SearchBar extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      <div style={searchStyles.searchDiv}>
        <form onSubmit={this.props.handleSubmit}>
          <input style={searchStyles.searchInput} placeholder='  search terms' onChange={this.props.handleChange}/>
          <button style={searchStyles.searchButton}>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar
