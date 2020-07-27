import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HomePanel from './components/panels/HomePanel'
import NavBarTop from './components/nav/NavBarTop'
import Footer from './components/nav/Footer'

function App() {
  return (
    <div className="App">

      <NavBarTop/>

      <Container>
        <Row>
          <Col>
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
