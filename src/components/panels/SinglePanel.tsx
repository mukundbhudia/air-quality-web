import React from 'react'
import * as timeago from 'timeago.js'

import { Card, Spinner } from 'react-bootstrap'

enum aqiScale {
  Good = "Good",
  Moderate = "Moderate",
  UnhealthyForSome = "Unhealthy for some",
  Unhealthy = "Unhealthy",
  VeryUnhealthy = "Very unhealthy",
  Hazardous = "Hazardous",
}

interface PanelStyle {
  name: string
  textColour: string
  message: string
}

const getPanelStyle = (aqi: number): PanelStyle => {
  let panelClass = { name: '', textColour: '', message: '' }
  if (aqi > 0 && aqi <= 50) {
    panelClass.name = 'aqi-good'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Good
  } else if (aqi > 30 && aqi <= 100) {
    panelClass.name = 'aqi-moderate'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Moderate
  } else if (aqi > 100 && aqi <= 150) {
    panelClass.name = 'aqi-unhealthy-for-some'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.UnhealthyForSome
  } else if (aqi > 150 && aqi <= 200) {
    panelClass.name = 'aqi-unhealthy'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Unhealthy
  } else if (aqi > 200 && aqi <= 300) {
    panelClass.name = 'aqi-very-unhealthy'
    panelClass.textColour = 'light'
    panelClass.message = aqiScale.VeryUnhealthy
  } else if (aqi > 300) {
    panelClass.name = 'aqi-hazardous'
    panelClass.textColour = 'light'
    panelClass.message = aqiScale.Hazardous
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
            pm2: <strong>{ data && data.aqi }</strong> ({ panelStyle.message })
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