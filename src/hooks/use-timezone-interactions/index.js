import { useEffect, useState } from "react";
import { TimezoneService } from "../../services";

export function useTimezoneInteractions() {
  const [state, setState] = useState({
    selectedCountry: null,
    selectedTimezone: null,
    timezoneLocaltime: null,
    availableCountries: [],
    countryTimezones: [],
    loadingContries: false,
    loadingCountryData: false,
    loadingCountryAreaTimezones: false,
    loadingTimezoneData: false
  })

  const setLoading = (loadingState = {}) => {
    setState(prevState => ({
      ...prevState,
      ...loadingState
    }))
  }

  useEffect(() => {
    loadCountries()
    loadCountryData("MX", "Mexico")
  }, [])

  const loadCountries = async () => {
    setLoading({ loadingContries: true })

    try {
      const availableCountries = await TimezoneService.getCountries()

      setState(prevState => ({
        ...prevState,
        availableCountries
      }))
    } catch (e) {
      console.error(e)
    } finally {
      setLoading({ loadingContries: false })
    }
  }

  const loadCountryData = async (countryId, countryName) => {
    setLoading({
      loadingCountryData: true,
      loadingCountryAreaTimezones: true
    })

    try {
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
    } catch (e) {
      console.error(e)
    } finally {
      setLoading({
        loadingCountryData: false,
        loadingCountryAreaTimezones: false
      })
    }
  }

  const loadTimezone = async (timezone_id) => {
    setLoading({ loadingTimezoneData: true })

    try {
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
        timezoneLocaltime: {
          ...selectedTimezone || {},
          ...timezoneData || {}
        }
      }))
    } catch (e) {
      console.error(e)
    } finally {
      setLoading({ loadingTimezoneData: false })
    }
  }

  return ({
    selectedCountry: state.selectedCountry,
    selectedTimezone: state.selectedTimezone,
    availableCountries: state.availableCountries,
    countryTimezones: state.countryTimezones,
    timezoneLocaltime: state.timezoneLocaltime,
    loading: {
      loadingContries: state.loadingContries,
      loadingCountryData: state.loadingCountryData,
      loadingCountryAreaTimezones: state.loadingCountryAreaTimezones,
      loadingTimezoneData: state.loadingTimezoneDatae
    },
    loadCountryData,
    loadCountries,
    loadTimezone
  })
}
