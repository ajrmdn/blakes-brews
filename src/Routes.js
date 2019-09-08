import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Brews from './Pages/Brews'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/brews" component={Brews}/>
  </Switch>
)

export default Routes
