import * as React from 'react'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectSelected, setBanner } from "../features/banner"
import { Icon } from "../theme"

import { 
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Avatar,
} from "@mui/material"

export default function Nav() {

  const homeAvatar = "/png/logo192.png"
  const selected = useAppSelector(selectSelected)
  const dispatch = useAppDispatch()

  const onHomeClick = (e: any) => {
    e.preventDefault()
    dispatch(setBanner({ key:"selected" ,value: null }))
  }

  const onGitClick = (e: any) => {
    e.preventDefault()
    window.open("https://github.com/listingslab-software/techno-banner", "_blank")
    console.warn("onGitClick", selected)
  }

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar 
        sx={{ 
          // boxShadow: "none",
        }}
        position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ onHomeClick }
          >
            <Avatar src={ homeAvatar } />
          </IconButton>
          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1, fontWeight: "lighter" }}>
            Techno Banners
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="github"
            sx={{ mr: 2 }}
            onClick={ onGitClick }
          >
            <Icon icon="github" />
          </IconButton>       
        </Toolbar>
      </AppBar>
    </Box>
  )
}
/**
 * <Button color="inherit">Login</Button>
 */