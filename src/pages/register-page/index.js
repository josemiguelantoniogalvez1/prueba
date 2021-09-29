import { AuthContainer } from "../../components"
import { TextField, Card, Button } from "@mui/material"
import { AuthService } from "../../services"
import { useState } from "react"

export function RegisterPage() {

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
        alert("prueba exitosa")
      } else {
        alert("contraseña incorrectos")
      }
    }
    catch (error) {
      alert("ocurrio un error inesperado")
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
          label="Correo electronico"
          style={{ width: "100%" }} />
          

        <TextField
          variant="standard"
          multiline={false}
          label="Contraseña"
          style={{ width: "100%" }}
          type="password"
          />

        <TextField
          variant="standard"
          multiline={false}
          label="Confirmar Contraseña"
          style={{ width: "100%" }}
          type="password" />

        <TextField
          variant="standard"
          multiline={false}
          label="Nombre completo"
          style={{ width: "100%" }} />

        <Button
          onClick={onLogin}
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}>
          Registrarme
        </Button>
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