import axios from "axios"

const weathers = [
  { country: "Mexico", grades: 28, measure: "C", label: "Parcialmente nublado", img: "" },
  { country: "United States", grades: 25, measure: "C", label: "Despejado", img: "" },
  { country: "Argentina", grades: 30, measure: "C", label: "Lluviendo", img: ""},
]

async function getCountryWeather(countryName) {
  const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=fa8df0b410374aff8b561455213009&q=${countryName}&lang=es`)

  const formattedWeather = {
    country: data?.location?.country,
    grades: data?.current?.temp_c,
    measure: "C",
    label: data?.current?.condition?.text,
    img: data?.current?.condition?.icon
  }

  return formattedWeather
}

export const WeatherService = {
  getCountryWeather
}