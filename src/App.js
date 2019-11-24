import React from 'react'
import { Route } from 'react-router-dom'
import BeersView from './beer/BeersView'
import NavigationBar from './shared/NavigationBar'
import SingleBeerView from './beer/SingleBeerView'

const App = () => (
  <div>
    <div>
      <Route path='/' component={NavigationBar}/>
      <Route exact path="/" component={BeersView}/>
      <Route path='/:id' component={SingleBeerView}/>
    </div>
  </div>
)

export default App
