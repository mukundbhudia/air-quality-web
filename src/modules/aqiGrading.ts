enum aqiScale {
  Good = "Good",
  Moderate = "Moderate",
  UnhealthyForSome = "Unhealthy for some",
  Unhealthy = "Unhealthy",
  VeryUnhealthy = "Very unhealthy",
  Hazardous = "Hazardous",
}

interface Pollutants {
  [key: string]: string,
}

export const pollutants: Pollutants = {
  co: "Carbon Monoxide",
  no2: "Nitrogen Dioxide",
  o3: "Ozone",
  pm10: "Respirable particulate matter",
  pm25: "Fine particulate matter",
  so2: "Sulphur Dioxide",
}

interface Conditions {
  [key: string]: string,
}

export const conditions: Conditions = {
  t: "Temperature",
  w: "Wind",
  h: "Humidity",
  p: "Air pressure",
}

const calculatePercentage = (aqi: number): number => {
  return Math.ceil((aqi/300)*100)
}

export interface PanelStyle {
  name: string
  textColour: string
  message: string
  percentage: number
}

export const getPanelStyle = (aqi: number): PanelStyle => {
  let panelClass: PanelStyle = {
    name: '',
    textColour: '',
    message: '',
    percentage: 0,
  }

  if (aqi > 0 && aqi <= 50) {
    panelClass.name = 'aqi-good'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Good
    panelClass.percentage = calculatePercentage(aqi)
  } else if (aqi > 30 && aqi <= 100) {
    panelClass.name = 'aqi-moderate'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Moderate
    panelClass.percentage = calculatePercentage(aqi)
  } else if (aqi > 100 && aqi <= 150) {
    panelClass.name = 'aqi-unhealthy-for-some'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.UnhealthyForSome
    panelClass.percentage = calculatePercentage(aqi)
  } else if (aqi > 150 && aqi <= 200) {
    panelClass.name = 'aqi-unhealthy'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Unhealthy
    panelClass.percentage = calculatePercentage(aqi)
  } else if (aqi > 200 && aqi <= 300) {
    panelClass.name = 'aqi-very-unhealthy'
    panelClass.textColour = 'light'
    panelClass.message = aqiScale.VeryUnhealthy
    panelClass.percentage = calculatePercentage(aqi)
  } else if (aqi > 300) {
    panelClass.name = 'aqi-hazardous'
    panelClass.textColour = 'light'
    panelClass.message = aqiScale.Hazardous
    panelClass.percentage = calculatePercentage(aqi)
  }
  
  return panelClass
}
