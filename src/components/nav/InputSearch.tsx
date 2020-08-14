import React, { useState } from 'react'
import {
  useHistory,
} from 'react-router-dom'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { Badge } from 'react-bootstrap'

import { URI_ENDPOINT } from '../../endpointConnection'
import './InputSearch.css'

const InputSearch = () => {
  let history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState([])

  const handleSearch = (query: any) => {
    setIsLoading(true);

    fetch(`${URI_ENDPOINT}/search?q=${query}`)
      .then((response) => response.json())
      .then(({ data }) => {
        const options = data.map((item: any) => ({
          id: item.uid,
          aqi: item.aqi,
          name: item.station.name
        }))
        setOptions(options)
        setIsLoading(false)
      })
  }

  return (
    <AsyncTypeahead
      id="async-example"
      isLoading={isLoading}
      labelKey={(option: any) => {
        return option.name
      }}
      minLength={3}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for a city/region..."
      renderMenuItemChildren={(option: any, props: any) => (
        <>
          <div>{ option.name } - AQI: <Badge variant="light">{ option.aqi }</Badge></div>
        </>
      )}
      onChange={(selected) => {
        if (selected[0]) {
          history.push(`/station/${selected[0].id}`)
        }
      }}
    />
  )
}

export default InputSearch
