import { AuthContainer } from "../../components"
import { TextField, Card, Button } from "@mui/material"
import { Link, useHistory } from "react-router-dom"
import { AuthService } from "../../services"
import { useState } from "react"

export function LoginPage() {
  const history = useHistory()

  const [state, setState] = useState({
    loading: false,
    error: null,
    email: null,
    password: null
  })

  const onInputChange = (field = {}) => {
    setState(prev => {
      return ({
        ...prev,
        ...field
      })
    })
  }

  const onLogin = async () => {
    try {
      const result = await AuthService.login(state.email, state.password)
      if (result === true) {
        history.push("/dashboard")
      } else {
        alert("Usuario o contraseña incorrectos")
      }
    }
    catch (error) {
      alert("Error. Ingresa el usuario y contraseña")
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
        <h3>Bienvenido</h3>
        <TextField
          onChange={e => onInputChange({ email: e.target.value })}
          variant="standard"
          multiline={false}
          label="Correo electronico"
          style={{ width: "100%" }} />
        <TextField
          onChange={e => onInputChange({ password: e.target.value })}
          variant="standard"
          multiline={false}
          label="Contraseña"
          style={{ width: "100%" }}
          type="password" />
        <Button
          onClick={onLogin}
          variant="contained"
          sx={{ width: "100%", marginTop: "2rem" }}>
          Iniciar sesion
        </Button>
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <span>¿No tienes cuenta?</span>
          <Link to="/register">Registrarme</Link>
        </div>
      </Card>
    </AuthContainer>
  )
}