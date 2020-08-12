import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'

import NavBarTop from './components/nav/NavBarTop'
import Footer from './components/nav/Footer'
import HomePage from './components/pages/HomePage'
import StationPage from './components/pages/StationPage'
import NotFoundPage from './components/pages/NotFoundPage'

const App = () => {
  return (
    <div className="App">

      <NavBarTop/>

      <Container>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/:id" children={
              <StationPage/>
            } />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Container>

      <Footer/>
    </div>
  )
}

export default App
