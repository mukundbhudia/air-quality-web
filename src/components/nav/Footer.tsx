import React, { useState, useEffect } from 'react'

import './nav.css'
import { URI_ENDPOINT } from '../../../src/endpointConnection'

const NavBarTop = () => {
  const [error, setError] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    fetch(URI_ENDPOINT)
      .then(res => res.json())
      .then(
        (result) => {
          if ( result.msg === 'Welcome to the air quality API!' ) {
            setIsLoaded(true)
          } else {
            setIsLoaded(false)
          }
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  let apiStatus: string = 'Connected'

  if (error) {
    apiStatus = 'Error'
  } else if (!isLoaded) {
    apiStatus = 'loading...'
  }

  return (
    <>
      <footer className="footer mt-5 py-3">
        <div className="container pull-left">
          <span className="text-muted">
            Data sources: <a target="_blank" rel="noopener noreferrer" href="https://aqicn.org/">The World Air Quality Index Project Team</a>.&nbsp;
          </span>
        </div>
        <div className="container pull-right">
          <span className="text-muted">Made by: <a target="_blank" rel="noopener noreferrer" href="https://github.com/mukundbhudia">Mukund</a>.&nbsp;
          API status: { apiStatus }.
          </span>
        </div>
      </footer>
    </>
  )
}

export default NavBarTop