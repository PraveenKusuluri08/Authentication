import React from "react"
import { Button } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import {useStyles } from "../../../../styles/styles"
const Presentation = () => {
const classes = useStyles()
  return(
    <div>
      <Button className={classes.signInAndOutLinks} variant="contained" color="primary"><NavLink className={classes.navLinks} to="/">New Project</NavLink></Button>
      <Button className={classes.signInAndOutLinks} variant="contained" color="primary">Log out</Button>
      <Button className={classes.menuItems} color="inherit"><NavLink to="/" className="btn-floating waves-effect waves-light orange">PP</NavLink></Button>
    </div>
  )
}
export default Presentation
