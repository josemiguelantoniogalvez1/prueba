
import React from 'react'

const defaultProps = {
  country: {
    country_id: undefined,
    name: undefined,
    flag: undefined,
    area: undefined
  }
}

export function SelectedCountry({ country } = defaultProps) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <h1>{country?.name}</h1>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <span style={{ fontSize: "6rem" }}>
          {country?.flag}
        </span>
      </div>
    </div>
  )
}
