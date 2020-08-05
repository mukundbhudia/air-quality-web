import React from 'react'
import * as timeago from 'timeago.js'

import { Card, Spinner } from 'react-bootstrap'

interface PanelStyle {
  name: string
  textColour: string
}

const getPanelStyle = (aqi: number): PanelStyle => {
  let panelClass = { name: '', textColour: '' }
  if (aqi > 0 && aqi <= 50) {
    panelClass.name = 'aqi-good'
    panelClass.textColour = 'dark'
  } else if (aqi > 30 && aqi <= 100) {
    panelClass.name = 'aqi-moderate'
    panelClass.textColour = 'dark'
  } else if (aqi > 100 && aqi <= 150) {
    panelClass.name = 'aqi-unhealthy-for-some'
    panelClass.textColour = 'dark'
  } else if (aqi > 150 && aqi <= 200) {
    panelClass.name = 'aqi-unhealthy'
    panelClass.textColour = 'dark'
  } else if (aqi > 200 && aqi <= 300) {
    panelClass.name = 'aqi-very-unhealthy'
    panelClass.textColour = 'light'
  } else if (aqi > 300) {
    panelClass.name = 'aqi-hazardous'
    panelClass.textColour = 'light'
  }
  
  return panelClass
}

const SinglePanel = ({ data }: any) => {

  let content = (
    <Card className="text-center">
      <Card.Header as="h5">Loading city...</Card.Header>
      <Card.Body>
        <Spinner animation="grow">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Card.Body>
    </Card>
  )

  if (data) {
    const panelStyle: PanelStyle = getPanelStyle(data.aqi)
    return (
      <Card
        className={`text-center aqi-panel ${ panelStyle.name }`}
      >
        <Card.Header as="h5">{ data && data.city.name }</Card.Header>
        <Card.Body>
          <Card.Text>
            Air quality index: <strong>{ data && data.aqi }</strong>
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated: { data && timeago.format(new Date(data.time.iso)) }</small>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return content
}

export default SinglePanel