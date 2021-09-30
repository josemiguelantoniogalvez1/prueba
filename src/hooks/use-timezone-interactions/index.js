import { useEffect, useState } from "react";
import { TimezoneService } from "../../services";

export function useTimezoneInteractions() {
  const [state, setState] = useState({
    selectedCountry: null,
    selectedTimezone: null,
    timezoneLocaltime: null,
    availableCountries: [],
    countryTimezones: [],
    loading: false
  })

  const setLoading = (loading) => {
    setState(prevState => ({
      ...prevState,
      loading
    }))
  }

  useEffect(() => {
    loadCountries()
    loadCountryData("MX", "Mexico")
  }, [])

  const loadCountries = async () => {
    setLoading(true)
    const availableCountries = await TimezoneService.getCountries()

    setState(prevState => ({
      ...prevState,
      availableCountries
    }))

    setLoading(false)
  }

  const loadCountryData = async (countryId, countryName) => {
    setLoading(true)
    const selectedCountry = await TimezoneService.getCountry(countryId, countryName)

    const countryTimezones = await TimezoneService.getAreaTimezones(selectedCountry.area)
    const [defaultTimezone] = countryTimezones ?? []

    const defaultSelectedTimezone = state.selectedTimezone || defaultTimezone

    setState(prevState => ({
      ...prevState,
      selectedCountry,
      countryTimezones,
      selectedTimezone: defaultSelectedTimezone
    }))

    loadTimezone(defaultSelectedTimezone.timezone_id)
    setLoading(false)
  }

  const loadTimezone = async (timezone_id) => {
    setLoading(true)
    const selectedTimezone = state
      .countryTimezones
      ?.find(tz => tz.timezone_id === timezone_id)

    setState(prevState => ({
      ...prevState,
      selectedTimezone
    }))

    const timezoneData = await TimezoneService.getTimezoneData(selectedTimezone?.name)

    setState(prevState => ({
      ...prevState,
      timezoneLocaltime: timezoneData?.localtime
    }))

    setLoading(false)
  }

  return ({
    selectedCountry: state.selectedCountry,
    selectedTimezone: state.selectedTimezone,
    availableCountries: state.availableCountries,
    countryTimezones: state.countryTimezones,
    timezoneLocaltime: state.timezoneLocaltime,
    loading: state.loading,
    loadCountryData,
    loadCountries,
    loadTimezone
  })
}
