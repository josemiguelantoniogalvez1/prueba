
import React from 'react'

const defaultProps = {
  timezone: {
    timezone_id: undefined,
    name: undefined
  },
  localtime: {
    name: undefined,
    country: undefined,
    tz_id: undefined,
    epoch: undefined,
    localtime: undefined
  }
}

export function Clock({ localtime } = defaultProps) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2rem"
    }}>
      <h1>{localtime?.localtime}</h1>
      <span>{localtime?.name}</span>
    </div>
  )
}
