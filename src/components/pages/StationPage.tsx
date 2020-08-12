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
  // console.log(id);

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [items, setItems] = useState<Array<any>>([])

  useEffect(() => {
    const params = setParams( { stnIds: [id] } )
    axios(`${URI_ENDPOINT}/getStation/`, {
      params
    })
    .then((result) => {
        setIsLoaded(true)
        // console.log(result.data);
        
        const nonErrorStations = result && result.data && result.data.data
        setItems([nonErrorStations])
    })
    .catch((error) => {
      setIsLoaded(true)
      setError(error)
    })
  }, [id])

  let content = null

  if (error) {
    content = <div>Error accessing data.</div>
  } else if (!isLoaded) {
    content = (      
      <>
        <Col className="mb-3">
          <SinglePanel data={ null }/>
        </Col>
      </>
    )
  } else {
    // console.log(items[0]);
    
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