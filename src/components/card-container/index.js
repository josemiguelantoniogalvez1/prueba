import { Card, CardContent, Typography } from "@mui/material"

export function CardContainer(props) {
  const style = props.sx || {}

  return (
    <Card
      raised
      sx={{ minHeight: "13rem", ...style }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, borderBottom: "2px solid #0BF" }}
          color="text.secondary"
          gutterBottom>
          {props.title}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  )
}
