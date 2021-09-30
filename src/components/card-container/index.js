import {
  Card,
  CardContent,
  Typography,
  Skeleton
} from "@mui/material"

export function CardContainer(props) {
  const style = props.sx || {}

  const skeleton = (
    <>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </>
  )

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
        {
          props.loading
          ? skeleton
          : props.children
        }
      </CardContent>
    </Card>
  )
}
