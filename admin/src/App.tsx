import React from 'react'
import {
  Container,
  CssBaseline,
  Grid,
} from "@mui/material"
import { Banner } from "./features/banner"

function App() {
  
  return <React.Fragment>
          <CssBaseline />
          <Container>
          <Grid container spacing={1}>
            <Grid item xs={ 12 }>
              <Banner />
            </Grid>     
          </Grid>
          </Container>
        </React.Fragment>
}

export default App