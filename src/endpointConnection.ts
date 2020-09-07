import axios from 'axios'

export const URI_ENDPOINT: string = process.env.REACT_APP_API_URI || 'http://localhost:4000'

export const fetchStationData = (URI: string, params: any, setIsLoaded: any, setItems: any, setError: any) => {
  axios(URI, {
    params
  })
  .then((result) => {
      setIsLoaded(true)
      if (result && result.data && result.data.data && !result.data.data.err) {
        let nonErrorStations = result &&
          result.data &&
          result.data.data
          if (Array.isArray(result.data.data)) {
            nonErrorStations.filter((item: any) => {
              return !('err' in item)
            })
            setItems(nonErrorStations)
          } else {
            setItems([nonErrorStations])
          }
      } else {
        setIsLoaded(false)
        setError(`Cannot find data with params: ${params.toString()}`)
      }
  })
  .catch((error) => {
    setIsLoaded(true)
    setError(error)
  })
}

