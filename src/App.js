import React from 'react'
import { Route } from 'react-router-dom'
import BeersView from './beer/BeersView'
import Header from './shared/Header'
import SingleBeerView from './beer/SingleBeerView'

const App = () => (
  <div>
    <div>
      <Route path='/' component={Header}/>
      <Route exact path="/" component={BeersView}/>
      <Route path='/:id' component={SingleBeerView}/>
    </div>
  </div>
)

export default App
