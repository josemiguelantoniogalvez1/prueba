import { Layout, CardContainer, TasksList, Weather, SelectedCountry, Clock, TimezonesList, CountriesList } from "../../components"
import { useTasks, useTimezoneInteractions, useWeatherInteractions } from "../../hooks"

const cardsStyle = { display: "flex", flexDirection: "column", gap: "2rem" }

export function DashboardPage() {
  const {
    completedTasks,
    pendingTasks,
    loading: loadingTasks
  } = useTasks()
  
  const {
    selectedCountry,
    selectedTimezone,
    timezoneLocaltime,
    availableCountries,
    countryTimezones,
    loadCountryData,
    loadTimezone,
    loading: loadingTimezone
  } = useTimezoneInteractions()

  const {
    selectedWeather,
    loadCountryWeather,
    loading: loadingWeather
  } = useWeatherInteractions("Mexico")

  const onClickCountry = (country) => {
    loadCountryWeather(country.name)
    loadCountryData(country.country_id, country.name)
  }

  const onClickTimezone = (timezoneId) => {
    loadTimezone(timezoneId)
  }

  return (
    <Layout>
      <div class="weather-grid">
        <div style={cardsStyle}>
          <CardContainer
            title="Clima"
            loading={loadingWeather}>
            <Weather weather={selectedWeather} />
          </CardContainer>
          <CardContainer
            title="Tareas pendientes"
            loading={loadingTasks}>
            <TasksList todo tasks={pendingTasks} />
          </CardContainer>
          <CardContainer
            title="Tareas completadas"
            loading={loadingTasks}>
            <TasksList tasks={completedTasks} />
          </CardContainer>
        </div>
        <div style={cardsStyle}>
          <CardContainer
            title="País seleccionado"
            loading={loadingTimezone}>
            <SelectedCountry country={selectedCountry} />
          </CardContainer>
          <CardContainer
            title="Hora"
            loading={loadingTimezone}>
            <Clock
              localtime={timezoneLocaltime}
              timezone={selectedTimezone}  />
          </CardContainer>
          <CardContainer
            title="Zonas horarias disponibles"
            loading={loadingTimezone}>
            <TimezonesList
              onClickTimezone={onClickTimezone}
              timezones={countryTimezones} />
          </CardContainer>
        </div>
        <div style={cardsStyle}>
          <CardContainer
            title="Países disponibles"
            sx={{ height: "100%" }}>
            <CountriesList
              onClickCountry={onClickCountry}
              countries={availableCountries} />
          </CardContainer>
        </div>
      </div>
    </Layout>
  )
}
