enum aqiScale {
  Good = "Good",
  Moderate = "Moderate",
  UnhealthyForSome = "Unhealthy for some",
  Unhealthy = "Unhealthy",
  VeryUnhealthy = "Very unhealthy",
  Hazardous = "Hazardous",
}

export interface PanelStyle {
  name: string
  textColour: string
  message: string
}

export const getPanelStyle = (aqi: number): PanelStyle => {
  let panelClass = { name: '', textColour: '', message: '' }
  if (aqi > 0 && aqi <= 50) {
    panelClass.name = 'aqi-good'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Good
  } else if (aqi > 30 && aqi <= 100) {
    panelClass.name = 'aqi-moderate'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Moderate
  } else if (aqi > 100 && aqi <= 150) {
    panelClass.name = 'aqi-unhealthy-for-some'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.UnhealthyForSome
  } else if (aqi > 150 && aqi <= 200) {
    panelClass.name = 'aqi-unhealthy'
    panelClass.textColour = 'dark'
    panelClass.message = aqiScale.Unhealthy
  } else if (aqi > 200 && aqi <= 300) {
    panelClass.name = 'aqi-very-unhealthy'
    panelClass.textColour = 'light'
    panelClass.message = aqiScale.VeryUnhealthy
  } else if (aqi > 300) {
    panelClass.name = 'aqi-hazardous'
    panelClass.textColour = 'light'
    panelClass.message = aqiScale.Hazardous
  }
  
  return panelClass
}
