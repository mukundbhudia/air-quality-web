import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Col } from 'react-bootstrap'

import { URI_ENDPOINT } from '../../endpointConnection'
import SinglePanel from './SinglePanel'

const setParams = (params: any): URLSearchParams => {
  const searchParams = new URLSearchParams()
  searchParams.set("stnIds", params.stnIds.toString())
  return searchParams
}

let allStations: Array<string> = ['5724', '9974', '12578', '1511'] // TODO: Add '5115', '5722', '7024', '1451', '8372', and more with formatting

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
            <Col key={ i } className="mb-3">
              <SinglePanel data={ null }/>
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
            <Col key={ item.idx } className="mb-3">
              <SinglePanel data={ item }/>
            </Col>
          )})
        }
      </>
    )
  }

}

export default HomePanel