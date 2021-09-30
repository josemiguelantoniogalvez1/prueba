import { useEffect, useState } from "react";
import { TimezoneService } from "../../services";

export function useTimezoneInteractions() {
  const [state, setState] = useState({
    selectedCountry: null,
    selectedTimezone: null,
    availableCountries: [],
    countryTimezones: [],
  })

  useEffect(() => {
    loadCountries()
    loadCountryData("MX")
  }, [])

  const loadCountries = async () => {
    const availableCountries = await TimezoneService.getCountries()

    setState(prevState => ({
      ...prevState,
      availableCountries
    }))
  }

  const loadCountryData = async (countryId) => {
    const selectedCountry = await TimezoneService.getCountry(countryId)
    const countryTimezones = await TimezoneService.getCountryTimezones(countryId)

    const [defaultTimezone] = countryTimezones ?? []

    setState(prevState => ({
      ...prevState,
      selectedCountry,
      countryTimezones,
      selectedTimezone: prevState.selectedTimezone || defaultTimezone
    }))
  }

  const loadTimezone = (timezone_id) => {
    const selectedTimezone = state
      .countryTimezones
      ?.find(tz => tz.timezone_id === timezone_id)

    setState(prevState => ({
      ...prevState,
      selectedTimezone
    }))
  }

  return ({
    selectedCountry: state.selectedCountry,
    selectedTimezone: state.selectedTimezone,
    availableCountries: state.availableCountries,
    countryTimezones: state.countryTimezones,
    loadCountryData,
    loadCountries,
    loadTimezone
  })
}
