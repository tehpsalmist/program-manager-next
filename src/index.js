import React, { createContext } from 'react'
import { render } from 'react-dom'
import allTheStuff from '../programs.json'
import { ProgramList, Program } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Breadcrumbs } from './components'
import './styles.scss'
import '@fortawesome/fontawesome-free/css/all.css'

export const ProgramContext = createContext()

export const App = props => {
  return <ProgramContext.Provider value={{
    breadcrumbs: [{
      name: 'Programs',
      link: '/programs',
    }],
    data: allTheStuff,
  }}>
    <Router>
      <Container>
        <h1>Program Manager <em>Next!</em></h1>
        <Breadcrumbs />
        <hr />
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
      </Container>
    </Router>
  </ProgramContext.Provider>
}

render(<App />, document.getElementById('app'))
