import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Employee from './pages/Employee'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Department from './pages/Department'
import EditEmployee from './pages/EditEmployee'

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/employee' component={Employee} />
        <Route path='/profile/:employeeCode' component={Profile} />
        <Route path='/department' component={Department} />
        <Route path='/edit/:employeeCode' component={EditEmployee} />
      </Switch>
    </Router>
  )
}
