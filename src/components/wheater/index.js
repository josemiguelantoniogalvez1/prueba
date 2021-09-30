
import React from 'react'

const defaultValue = {
  weather: { img: "", grades: "", measure: "", label: "--" }
}

export function Weather({ weather } = defaultValue) {
  const tempLabel = [weather?.grades, weather?.measure]
    .filter(text => !!text)
    .join(" ")
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <img
          style={{ height: "110px", width: "110px", margin: "auto" }}
          src={weather?.img}
          alt="clima-img" />
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1>{tempLabel}</h1>
        <span>{weather?.label}</span>
      </div>
    </div>
  )
}
