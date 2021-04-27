import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from "../../../styles/styles"
function Presentation() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button className={classes.menuItems} color="inherit">Login</Button>
          <Button color="inherit">Signout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Presentation
