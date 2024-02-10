import { useState } from 'react'
import './App.css'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme()

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [customColor, setCustomColor] = useState('')

  const changeColor = (color) => {
    setBackgroundColor(color)
  }
  const handleCustomColorChange = (event) => {
    setCustomColor(event.target.value)
  }
  const handleCustomColorSubmit = () => {
    if (customColor) {
      setBackgroundColor(customColor)
      setCustomColor('')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', backgroundColor }}>
        <Container maxWidth="sm">
          <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
            <Grid item>
              <Typography variant="h3" gutterBottom>
                Background Color Changer
              </Typography>
            </Grid>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => changeColor('#ff6347')}>
                  Red
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => changeColor('#4682b4')}>
                  Blue
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => changeColor('#7cfc00')}>
                  Green
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => changeColor('#ffd700')}>
                  Gold
                </Button>
              </Grid>
            </Grid>
            <Grid item container spacing={2} justifyContent="center" alignItems="center">
              <Grid item>
                <TextField
                  label="Custom Color"
                  variant="outlined"
                  value={customColor}
                  onChange={handleCustomColorChange}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleCustomColorSubmit}>
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
