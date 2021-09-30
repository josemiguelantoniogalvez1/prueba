import { Layout, CardContainer, TasksList } from "../../components"
import { useTasks, useTimezoneInteractions, useWeatherInteractions } from "../../hooks"

const cardsStyle = { display: "flex", flexDirection: "column", gap: "2rem" }

export function DashboardPage() {
  const { completedTasks, pendingTasks } = useTasks()
  
  const {
    selectedCountry,
    selectedTimezone,
    timezoneLocaltime,
    availableCountries,
    countryTimezones,
    loadCountryData,
    loadTimezone
  } = useTimezoneInteractions()

  const { selectedWeather, loadCountryWeather } = useWeatherInteractions("Mexico")

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
          <CardContainer title="Clima">
            <img src={selectedWeather?.img} />
            {[selectedWeather?.grades, selectedWeather?.measure]
              .filter(text => !!text)
              .join(" ")}
            {`${selectedWeather?.label || "--"}`}
          </CardContainer>
          <CardContainer title="Tareas pendientes">
            <TasksList todo tasks={pendingTasks} />
          </CardContainer>
          <CardContainer title="Tareas completadas">
            <TasksList tasks={completedTasks} />
          </CardContainer>
        </div>
        <div style={cardsStyle}>
          <CardContainer title="País seleccionado">
            {selectedCountry?.name}
            <span style={{ fontSize: "4rem" }}>
              {selectedCountry?.flag}
            </span>
          </CardContainer>
          <CardContainer title="Hora">
            {timezoneLocaltime}
            {selectedTimezone?.name}
          </CardContainer>
          <CardContainer title="Zonas horarias disponibles">
            <ul style={{ maxHeight: "13rem", overflowY: "auto" }}>
              {countryTimezones?.map(tZone => (
                <li
                  onClick={() => onClickTimezone(tZone.timezone_id)}
                  className="clickable"
                  style={{ listStyle: "none" }}
                  key={tZone.timezone_id}>
                  {tZone.name}
                </li>
              ))}
              </ul>
          </CardContainer>
        </div>
        <div style={cardsStyle}>
          <CardContainer
            title="Países disponibles"
            sx={{ height: "100%" }}>
              <div style={{ maxHeight: "40rem", overflowY: "auto" }}>
                <ul>
                  {availableCountries?.map(country => (
                    <li
                      onClick={() => onClickCountry(country)}
                      className="clickable"
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                      key={country.country_id}>
                      <span style={{ marginLeft: "1rem", fontSize: "2rem" }}>{country.flag}</span>
                      {country.name}
                    </li>
                  ))}
                </ul>
              </div>
          </CardContainer>
        </div>
      </div>
    </Layout>
  )
}
