import { Link } from "react-router-dom";

export function Navbar() {
  const linkStyle = { textDecoration: "none", color: "#fff" }

  return (
    <div className="navbar">
      <ul className="navbar-menu-items">
        <li>
          <Link to="/dashboard" style={linkStyle}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" style={linkStyle}>
            Usuarios
          </Link>
        </li>
      </ul>
      <Link to="/login" style={linkStyle}>
        Cerrar sesión
      </Link>
    </div>
  )
}