import bgimage from "../../assets/fondo1.webp"

export function AuthContainer(props) {
  return (
    <div id="auth-container" style={{
      backgroundImage:`url(${bgimage})`,
      
    }}>
      {props.children}
    </div>
  )
}