import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col } from 'react-bootstrap'

import HomePanel from './components/panels/HomePanel'
import NavBarTop from './components/nav/NavBarTop'
import Footer from './components/nav/Footer'

const App = () => {
  return (
    <div className="App">

      <NavBarTop/>

      <Container>
        <Row>
          <Col className="mb-4">
            <h1 className="mt-5">The Air Quality App</h1>
            <p className="lead">Welcome to the air quality app. Showing you pm25, pm10, o3, no2, so2, co pollutants in your area.</p>
          </Col>
        </Row>
        <Row>
          <HomePanel/>
        </Row>
      </Container>

      <Footer/>
    </div>
  )
}

export default App
