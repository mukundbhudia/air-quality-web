import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

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
            <p>Index scale and colour legend:</p>
            <ProgressBar>
              <ProgressBar className="aqi-good" now={20} label="Good" key={1} />
              <ProgressBar className="aqi-moderate" now={20} label="Moderate" key={2} />
              <ProgressBar className="aqi-unhealthy-for-some" now={20} label="Unhealthy for some" key={3} />
              <ProgressBar className="aqi-unhealthy" now={20} label="Unhealthy" key={4} />
              <ProgressBar className="aqi-very-unhealthy" now={20} label="Very unhealthy" key={5} />
            </ProgressBar>
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
