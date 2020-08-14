import React from 'react'

import { Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap'
import { getPanelStyle } from '../../modules/aqiGrading'

const AllAqiPanel = (data: any) => {

  const allAqiData = data && data.data
  const allPollutants = data && data.data && Object.keys(allAqiData)

  return (
    <>
      <Card>
        <Card.Header as="h6">All pollutants:</Card.Header>
        <Card.Body>
          {allPollutants && allAqiData && allPollutants.map((key) => {
            const panelStyle = getPanelStyle(allAqiData[key].v)
            return (
              <Row className="justify-content-start" key={`pb-${key}`}>
                <Col sm={1}><Badge variant="secondary">{key}</Badge></Col>
                <Col sm={11}>
                  <ProgressBar className="mb-3">
                    <ProgressBar
                      className={ panelStyle.name }
                      now={panelStyle.percentage}
                      label={`${panelStyle.percentage}% - ${panelStyle.message}`}
                      key={5}
                    />
                  </ProgressBar>
                </Col>
              </Row>
            )
          })}
        </Card.Body>
      </Card>
    </>
  )
}

export default AllAqiPanel