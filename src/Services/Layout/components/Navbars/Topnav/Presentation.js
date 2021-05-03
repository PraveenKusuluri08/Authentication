import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useStyles } from "../../../styles/styles"
import SigninLinks from "../Navlinks/SigninLinks"
import SignoutLinks from "../Navlinks/SignoutLinks"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { Drawer, useTheme } from "@material-ui/core"
function Presentation() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            color="inherit"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
          </Drawer>
          <Toolbar className={classes.signInAndOutLinks}>
            <SigninLinks />
            <SignoutLinks />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Presentation
