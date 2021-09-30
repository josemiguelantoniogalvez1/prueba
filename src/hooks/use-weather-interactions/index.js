import { useEffect, useState } from "react";
import { WeatherService } from "../../services";

export function useWeatherInteractions(defaultCountry = "") {
  const [state, setState] = useState({
    selectedWeather: null
  })

  useEffect(() => {
    loadCountryWeather(defaultCountry)
  }, [defaultCountry])

  const loadCountryWeather = async (countryName) => {
    const weather = await WeatherService.getCountryWeather(countryName)

    setState(prevState => ({
      ...prevState,
      selectedWeather: weather
    }))
  }

  return ({
    selectedWeather: state.selectedWeather,
    loadCountryWeather
  })
}
