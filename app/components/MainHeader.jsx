
import { Menu } from '@mui/icons-material'
import { Container, Toolbar, AppBar, IconButton } from '@mui/material'
import { Link } from '@remix-run/react'
import React from 'react'

export default function MainHeader() {
  return (
    <AppBar position="static" style={{backgroundColor:'#2B2B2B'}}>
  <Toolbar >
  <Link
        href={'/'}
        style={{ color: "white", textDecoration: "none" }}
      > <h2>
      ABC Finances
    </h2>
    </Link>
  </Toolbar>
</AppBar>
   

  )
}
