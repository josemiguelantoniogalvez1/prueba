export function TimezonesList({ timezones = [], onClickTimezone }) {
  return (
    <ul style={{ maxHeight: "13rem", overflowY: "auto" }}>
    {timezones?.map(tZone => (
      <li
        onClick={() => onClickTimezone(tZone.timezone_id)}
        className="clickable"
        style={{ listStyle: "none" }}
        key={tZone.timezone_id}>
        {tZone.name}
      </li>
    ))}
    </ul>
  );
}
