const weathers = [
  { country_id: "mx", grades: 28, measure: "C", label: "Parcialmente nublado", img: "" },
  { country_id: "us", grades: 25, measure: "C", label: "Despejado", img: "" },
  { country_id: "ar", grades: 30, measure: "C", label: "Lluviendo", img: ""},
]

async function getCountryWeather(country_id) {
  return weathers.find(weather => weather.country_id === country_id)
}

export const WeatherService = {
  getCountryWeather
}