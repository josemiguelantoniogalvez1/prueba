import { Layout, CardContainer, TasksList } from "../../components"
import { useTasks, useTimezoneInteractions, useWeatherInteractions } from "../../hooks"

const cardsStyle = { display: "flex", flexDirection: "column", gap: "2rem" }

export function DashboardPage() {
  const { completedTasks, pendingTasks } = useTasks()
  
  const {
    selectedCountry,
    selectedTimezone,
    availableCountries,
    countryTimezones,
    loadCountryData,
    loadTimezone
  } = useTimezoneInteractions()

  const { selectedWeather, loadCountryWeather } = useWeatherInteractions("MX")

  return (
    <Layout>
      <div class="weather-grid">
        <div style={cardsStyle}>
          <CardContainer title="Clima">
            {`${selectedWeather?.grades} ${selectedWeather?.measure}`}
            {`${selectedWeather?.label}`}
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
          </CardContainer>
          <CardContainer title="Hora">
            Tareas pendientes
          </CardContainer>
          <CardContainer title="Zonas horarias disponibles">
            <ul>
              {countryTimezones?.map(tZone => (
                <li
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
