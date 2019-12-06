import React, { useState, useEffect, createContext } from 'react'
import { render } from 'react-dom'
import allTheStuff from '../programs.json'
import { ProgramList, Program } from './components'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import './styles.scss'
import '@fortawesome/fontawesome-free/css/all.css'

export const ProgramContext = createContext()

console.log(allTheStuff)

export const App = props => {
  console.log(location.pathname)
  return <ProgramContext.Provider value={allTheStuff}>
    <Router>
      <main className='container'>
        <h1>Program Manager <em>Next!</em></h1>
        <Switch>
          <Route path="/programs/:id">
            <Program />
          </Route>
          <Route path="/applications/:id">
            <Program />
          </Route>
          <Route path="/">
            <ProgramList />
          </Route>
        </Switch>
      </main>
    </Router>
  </ProgramContext.Provider>
}

render(<App />, document.getElementById('app'))
