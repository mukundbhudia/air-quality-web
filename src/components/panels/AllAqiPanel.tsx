import React from 'react'

import { Row, Col, Card, Badge, ProgressBar, Alert } from 'react-bootstrap'
import { getPanelStyle, pollutants, conditions } from '../../modules/aqiGrading'

const AllAqiPanel = (data: any) => {

  const allAqiData = data && data.data
  const allPollutants = data && data.data && Object.keys(allAqiData)
  const pollutantBars = allPollutants && allPollutants.filter((pollutant: string) => {
    return pollutant in pollutants
  })
  const conditionInfo = allPollutants && allPollutants.filter((pollutant: string) => {
    return pollutant in conditions
  })
  
  return (
    <>
      <Row>
        {conditionInfo && conditionInfo.map((key: string) => {
          return (
            <Col key={`cnd-${key}`} sm={12/conditionInfo.length}>
              <Alert variant="info">
                { conditions[key] } - <strong>{ allAqiData[key].v }</strong>
              </Alert>
            </Col>
          )
        })}
      </Row>
      <Card>
        <Card.Header as="h6">All pollutants:</Card.Header>
        <Card.Body>
          {pollutantBars && allAqiData && pollutantBars.map((key: string) => {
            const panelStyle = getPanelStyle(allAqiData[key].v)
            return (
              <Row className="justify-content-start" key={`pb-${key}`}>
                <Col sm={3}>
                  <Badge variant="secondary">
                    {key}
                  </Badge>
                  &nbsp;
                  { pollutants[key] }
                </Col>
                <Col sm={9}>
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