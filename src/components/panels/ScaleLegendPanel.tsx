import React from 'react'

import { Card, ProgressBar } from 'react-bootstrap'

const ScaleLegendPanel = () => {
  return (
    <>
      <Card>
        <Card.Header as="h6">Index scale and colour legend:</Card.Header>
        <Card.Body>
          <ProgressBar>
            <ProgressBar className="aqi-good" now={20} label="Good" key={1} />
            <ProgressBar className="aqi-moderate" now={20} label="Moderate" key={2} />
            <ProgressBar className="aqi-unhealthy-for-some" now={20} label="Unhealthy for some" key={3} />
            <ProgressBar className="aqi-unhealthy" now={20} label="Unhealthy" key={4} />
            <ProgressBar className="aqi-very-unhealthy" now={20} label="Very unhealthy" key={5} />
          </ProgressBar>
        </Card.Body>
      </Card>
    </>
  )
}

export default ScaleLegendPanel