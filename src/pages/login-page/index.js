import { AuthContainer } from "../../components"
import { TextField, Card, Button, Alert, } from "@mui/material"
import { Link } from "react-router-dom"
import { AuthService } from "../../services"
import { AlternateEmail } from "@mui/icons-material"

export function LoginPage() {

  const onLogin = () => {
    try {
      const result = AuthService.login("ejemplo", "contraseña")
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
        <h3>Bienvenido</h3>
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
          <Link>Registrarme</Link>
        </div>
      </Card>
    </AuthContainer>
  )
}