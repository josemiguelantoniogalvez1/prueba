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
    loadCountryData("MX", "Mexico")
  }, [])

  const loadCountries = async () => {
    const availableCountries = await TimezoneService.getCountries()

    setState(prevState => ({
      ...prevState,
      availableCountries
    }))
  }

  const loadCountryData = async (countryId, countryName) => {
    const selectedCountry = await TimezoneService.getCountry(countryId, countryName)

    const countryTimezones = await TimezoneService.getAreaTimezones(selectedCountry.area)
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
