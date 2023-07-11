import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Employee from './pages/Employee'
import Home from './pages/Home'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/employee' exact component={Employee} />
      </Switch>
    </Router>
  )
}
