import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as timeago from 'timeago.js'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { URI_ENDPOINT } from '../../endpointConnection'

const setParams = (params: any): URLSearchParams => {
  const searchParams = new URLSearchParams()
  searchParams.set("stnIds", params.stnIds.toString())
  return searchParams
}

let allStations: Array<string> = ['5724', '9974', '5115', '5722', '7024', '1451']

const HomePanel = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [items, setItems] = useState<Array<any>>([])

  useEffect(() => {
    const params = setParams( { stnIds: allStations } )
    axios(`${URI_ENDPOINT}/getMultipleStations/`, {
      params
    })
    .then((result) => {
        setIsLoaded(true)
        const nonErrorStations = result &&
          result.data &&
          result.data.data.filter((item: any) => {
            return !('err' in item)
          })
        setItems(nonErrorStations)
    })
    .catch((error) => {
      setIsLoaded(true)
      setError(error)
    })
  }, [])

  if (error) {
    return <div>Error accessing data.</div>
  } else if (!isLoaded) {
    return (      
      <>
        {allStations.map((_, i) => {            
          return (
            <Col key={ i }>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Loading ...</Card.Title>
                  <Card.Text>
                    Air quality index: Loading ...
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated: Loading ...</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )})
        }
      </>
    )
  } else {
    return (
      <>
        {items.map(item => {            
          return (
            <Col key={ item.idx }>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{ item.city.name }</Card.Title>
                  <Card.Text>
                    Air quality index: { item.aqi }
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated: { timeago.format(new Date(item.time.iso)) }</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )})
        }
      </>
    )
  }

}

export default HomePanel