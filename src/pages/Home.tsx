import { Typography, useTheme } from "@mui/material"

function Home() {
  const theme = useTheme()

  return (
    <Typography
      component="h1"
      variant="displayLarge"
      sx={{
        color: theme.palette.primary.base,
      }}
    >
      Home
    </Typography>
  )
}

export default Home
