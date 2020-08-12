import React from 'react'
import { Row, Col } from 'react-bootstrap'

import HomePanel from '../panels/HomePanel'
import ScaleLegendPanel from '../panels/ScaleLegendPanel'

const HomePage = () => {
  return (
    <>
      <Row>
        <Col className="mb-4">
          <h1 className="mt-5">The Air Quality App</h1>
          <p className="lead">Welcome to the air quality app. Showing you pm25, pm10, o3, no2, so2, co pollutants in your area.</p>
        </Col>
      </Row>
      <Row>
        <HomePanel/>
      </Row>
      <Row>
        <Col>
          <ScaleLegendPanel/>
        </Col>
      </Row>
    </>
  )
}

export default HomePage