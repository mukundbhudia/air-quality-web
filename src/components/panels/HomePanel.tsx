import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { URI_ENDPOINT } from '../../endpointConnection'

const HomePanel = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [aqi, setAqi] = useState<string>('')        // TODO: Use some kind of stateful data structure
  const [city, setCity] = useState<string>('')
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    axios(`${URI_ENDPOINT}/getStation/`, {
      params: { stnId: 5724 }
    })
    .then((result) => {
        setIsLoaded(true)
        setAqi(result.data.data.aqi)
        setCity(result.data.data.city.name)
        setLastUpdated(result.data.data.time.iso)
    })
    .catch((error) => {
      setIsLoaded(true)
      setError(error)
    })
  }, [])

  if (error) {
    return <div>Error accessing data.</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{ city }</Card.Title>
              <Card.Text>
                Air quality index: { aqi }
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated: { (new Date(lastUpdated)).toLocaleString() }</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </>
    )
  }

}

export default HomePanel