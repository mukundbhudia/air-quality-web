import React, { useState } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'

import { URI_ENDPOINT } from '../../endpointConnection'

const InputSearch = () => {
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
        // let label = option.country
        // if (option.province !== null) {
        //   label = label + ` - ${option.province}`
        // }
        return option.name
      }}
      minLength={3}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for a city/region..."
      renderMenuItemChildren={(option: any, props: any) => (
        <>
          <span>{ option.name } - AQI: { option.aqi }</span>
          {/* <img
            alt={option.login}
            src={option.avatar_url}
            style={{
              height: '24px',
              marginRight: '10px',
              width: '24px',
            }}
          />
          <span>{option.login}</span> */}
        </>
      )}
    />
  )
}

export default InputSearch
