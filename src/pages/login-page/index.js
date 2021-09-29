import { FormContainer } from "../../components"
import { TextField, Card, Input, Button, } from "@mui/material"
import { SpaceBar } from "@mui/icons-material"
import { Link } from "react-router-dom"
import bgimage from "../../assets/fondo1.webp"


export function LoginPage() {
  return (
    <div id="auth-container" style={{
      backgroundImage:`url(${bgimage})`,
      
    }}>
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
    </div>
  )
}