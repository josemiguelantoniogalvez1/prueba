import axios from "axios"

const countries = [
  { country_id: "MX", name: "México", flag: "" },
  { country_id: "us", name: "U. S. A.", flag: "" },
  { country_id: "ar", name: "Argentina", flag: "" },
]

const timezones = [
  { timezone_id: "1", name: "Ciudad de México - Central", country_id: "MX", utcOffset: 4 },
  { timezone_id: "2", name: "Tijuana", country_id: "MX", utcOffset: -4 },
  { timezone_id: "3", name: "Monterrey", country_id: "MX", utcOffset: 2 }
]

async function getCountries() {
  const results = await axios.get("https://restcountries.com/v3.1/all")

  const countries = results.data?.map(result => ({
    country_id: result.cca2,
    name: result.name?.common,
    flag: result.flag
  }))

  return countries
}

async function getCountry(country_id) {
  const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${country_id}`)

  let country = null

  if (data.length > 0) {
    country = data[0]
  }

  const fommatedCountry = {
    country_id: country?.cca2,
    name: country?.name?.common,
    flag: country?.flag
  }

  return fommatedCountry
}

async function getCountryTimezones(country_id) {
  return timezones.filter(timezone => timezone.country_id === country_id)
}

export const TimezoneService = {
  getCountries,
  getCountry,
  getCountryTimezones
}