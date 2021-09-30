export function CountriesList({ countries = [], onClickCountry }) {
  return (
    <div style={{ maxHeight: "40rem", overflowY: "auto" }}>
      <ul>
        {countries?.map(country => (
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
            <span
              style={{ marginLeft: "1rem", fontSize: "2rem" }}>
              {country.flag}
            </span>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
