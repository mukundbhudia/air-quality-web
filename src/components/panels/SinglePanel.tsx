import React from 'react'
import {
  Link,
} from 'react-router-dom'
import * as timeago from 'timeago.js'
import { Card, Spinner } from 'react-bootstrap'

import { PanelStyle, getPanelStyle } from '../../modules/aqiGrading'

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
        <Card.Header as="h5"><Link to={ `/station/${data.idx}` }>{ data && data.city.name }</Link></Card.Header>
        <Card.Body>
          <Card.Text>
            pm2.5: <strong>{ data && data.aqi }</strong> ({ panelStyle.message })
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