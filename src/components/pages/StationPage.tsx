import React, { useEffect, useState } from 'react'
import {
  useParams
} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import SinglePanel from '../panels/SinglePanel'
import { URI_ENDPOINT, fetchStationData } from '../../endpointConnection'
import AllAqiPanel from '../panels/AllAqiPanel'

const setParams = (params: any): URLSearchParams => {
  const searchParams = new URLSearchParams()
  searchParams.set("stnId", params.stnIds.toString())
  return searchParams
}

const StationPage = () => {
  const params: any = useParams()
  const id: number = params.id

  const [error, setError] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [items, setItems] = useState<Array<any>>([])

  useEffect(() => {
    const params = setParams( { stnIds: [id] } )
    fetchStationData(
      `${URI_ENDPOINT}/getStation/`,
      params,
      setIsLoaded,
      setItems,
      setError,
    )
  }, [id])

  let content = null
  let cityInfo = null
  let allAqi = null

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
    cityInfo = items[0] && items[0].city
    allAqi = items[0] && items[0].iaqi
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
          <h1 className="mt-5">{ cityInfo && cityInfo.name }</h1>
        </Col>
      </Row>
      <Row>
        { content }
      </Row>
      <Row>
        <Col className="mb-4">
          <AllAqiPanel data={ allAqi }/>
        </Col>
      </Row>
    </>
  )
}

export default StationPage
