import * as React from 'react'
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectSelected, setBanner } from "../"
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import { Icon } from "../../../theme"

export default function Nav() {

  const selected = useAppSelector(selectSelected)
  const dispatch = useAppDispatch()

  const onHomeClick = (e: any) => {
    e.preventDefault()
    dispatch(setBanner({ key:"selected" ,value: null }))
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ onHomeClick }
          >

            <Icon icon="home" />
          </IconButton>
          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1, fontWeight: "lighter" }}>
            Banners
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}
/**
 * <Button color="inherit">Login</Button>
 */