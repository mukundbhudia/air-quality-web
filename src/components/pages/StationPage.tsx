import React, { useEffect, useState } from 'react'
import {
  useParams
} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import SinglePanel from '../panels/SinglePanel'
import { URI_ENDPOINT } from '../../endpointConnection'

const setParams = (params: any): URLSearchParams => {
  const searchParams = new URLSearchParams()
  searchParams.set("stnId", params.stnIds.toString())
  return searchParams
}

const HomePage = () => {
  let { id } = useParams()
  const [error, setError] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [items, setItems] = useState<Array<any>>([])

  useEffect(() => {
    const params = setParams( { stnIds: [id] } )
    axios(`${URI_ENDPOINT}/getStation/`, {
      params
    })
    .then((result) => {
        setIsLoaded(true)
        if (result && result.data && result.data.data && !result.data.data.err) {
          const nonErrorStations = result && result.data && result.data.data
          setItems([nonErrorStations])
        } else {
          setIsLoaded(false)
          setError(`Cannot find station with ID: ${id}`)
        }
    })
    .catch((error) => {
      setIsLoaded(true)
      setError(error)
    })
  }, [id])

  let content = null

  if (error) {
    return (
      <div>
        <p>Error accessing data.</p>
        <br/>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  } else if (!isLoaded) {
    content = (      
      <>
        <Col className="mb-3">
          <SinglePanel data={ null }/>
        </Col>
      </>
    )
  } else {
    content = (      
      <>
        <Col className="mb-3">
          <SinglePanel data={ items[0] }/>
        </Col>
      </>
    )
  }

  return (
    <>
      <Row>
        <Col className="mb-4">
          <h1 className="mt-5">{  items[0] && items[0].city.name }</h1>
          <p className="lead">Welcome to the air quality app. Showing you pm25, pm10, o3, no2, so2, co pollutants in your area.</p>
        </Col>
      </Row>
      <Row>
        { content }
      </Row>
    </>
  )

}

export default HomePage