import React from 'react'
import {
  Container,
  CssBaseline,
} from "@mui/material"
import { Banner } from "./features/banner"

function App() {
  
  return <React.Fragment>
          <CssBaseline />
          <Container>
            <Banner />
          </Container>
        </React.Fragment>
}

export default App