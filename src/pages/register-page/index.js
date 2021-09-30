import { AuthContainer } from "../../components"
import { TextField, Card, Button } from "@mui/material"
import { AuthService } from "../../services"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

export function RegisterPage() {
  const history = useHistory()

  const [state, setState] = useState({
    loading: false,
    error: null,
    email: null,
    password: null,
    repeatedPassword: null,
    fullName: null
  })

  const onInputChange = (field = {}) => {
    setState(prev => {
      return ({
        ...prev,
        ...field
      })
    })
  }

  const onRegister = async () => {
    if (state.password !== state.repeatedPassword) {
      alert("Las contraseñas no coinciden")
      return;
    }

    try {
      const newUser = await AuthService.registerUser({
        email: state.email,
        password: state.password,
        fullName: state.fullName
      })

      if (newUser) {
        alert("Registro existoso, ahora puedes iniciar sesión")
        history.push("/login")
      } else {
        alert("No se pudo registrar el usuario")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <AuthContainer>
      <Card sx={{
        width: "25rem",
        minHeight: "25rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
        <h3>Crear cuenta</h3>
        <TextField
          variant="standard"
          multiline={false}
          label="Correo electrónico"
          style={{ width: "100%" }}
          onChange={e => onInputChange({ email: e.target.value })} />

        <TextField
          variant="standard"
          multiline={false}
          label="Contraseña"
          style={{ width: "100%" }}
          type="password"
          onChange={e => onInputChange({ password: e.target.value })} />

        <TextField
          variant="standard"
          multiline={false}
          label="Confirmar Contraseña"
          style={{ width: "100%" }}
          type="password"
          onChange={e => onInputChange({ repeatedPassword: e.target.value })}  />

        <TextField
          variant="standard"
          multiline={false}
          label="Nombre completo"
          style={{ width: "100%" }}
          onChange={e => onInputChange({ fullName: e.target.value })}  />

        <Button
          onClick={onRegister}
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}>
          Registrarme
        </Button>
        <Link to="/login" style={{ textAlign: "center" }}>
          Iniciar sesión
        </Link>
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
        </div>
      </Card>
    </AuthContainer>
  )
}