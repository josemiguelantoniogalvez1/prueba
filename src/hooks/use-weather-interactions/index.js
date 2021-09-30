import { useEffect, useState } from "react";
import { WeatherService } from "../../services";

export function useWeatherInteractions(defaultCountry = "") {
  const [state, setState] = useState({
    selectedWeather: null,
    loading: false
  })

  const setLoading = (loading) => {
    setState(prevState => ({
      ...prevState,
      loading
    }))
  }

  useEffect(() => {
    loadCountryWeather(defaultCountry)
  }, [defaultCountry])

  const loadCountryWeather = async (countryName) => {
    setLoading(true)
    const weather = await WeatherService.getCountryWeather(countryName)

    setState(prevState => ({
      ...prevState,
      selectedWeather: weather
    }))
    setLoading(false)
  }

  return ({
    selectedWeather: state.selectedWeather,
    loading: state.loading,
    loadCountryWeather
  })
}
