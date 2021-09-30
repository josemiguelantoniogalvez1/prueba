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

async function getCountry(country_id, countryName) {
  const fommatedCountry = {
    country_id: undefined,
    name: undefined,
    flag: undefined,
    area: undefined
  }

  const { data: countryMetadataResults } = await axios.get(`https://restcountries.com/v3.1/alpha/${country_id}`)
  const { data: weatherCountryResult } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=fa8df0b410374aff8b561455213009&q=${countryName}&lang=es`)

  if (countryMetadataResults.length > 0) {
    const country = countryMetadataResults[0]

    fommatedCountry.country_id = country?.cca2
    fommatedCountry.name = country?.name?.common
    fommatedCountry.flag = country?.flag

    if (weatherCountryResult) {
      fommatedCountry.area = (weatherCountryResult?.location?.tz_id || "").split("/")?.[0]
    }
  }

  return fommatedCountry
}

async function getAreaTimezones(area) {
  const { data } = await axios.get(`https://worldtimeapi.org/api/timezone/${area}`)

  return data?.map((timeZone, idx) => ({
      timezone_id: `${timeZone}-${idx}`,
      name: timeZone
    })
  ) || []
}

async function getTimezoneData(timezone) {
  const { data } = await axios.get(`http://api.weatherapi.com/v1/timezone.json?key=fa8df0b410374aff8b561455213009&q=${timezone}`)
  
  const formatedTimezone = {
    name: data?.location?.name,
    country: data?.location?.country,
    tz_id: data?.location?.tz_id,
    epoch: data?.location?.localtime_epoch,
    localtime: data?.location?.localtime
  }

  return formatedTimezone
}



export const TimezoneService = {
  getCountries,
  getCountry,
  getAreaTimezones,
  getTimezoneData
}