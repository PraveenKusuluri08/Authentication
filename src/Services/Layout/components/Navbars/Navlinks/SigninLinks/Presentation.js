import React from "react"
import { Button } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import {useStyles } from "../../../../styles/styles"

const Presentation = (props) => {
  const {logOut} =props
const classes = useStyles()
  return(
    <div>
      <Button className={classes.signInAndOutLinks} variant="contained" color="primary"><NavLink className={classes.navLinks} to="/create">New Project</NavLink></Button>
      <Button className={classes.signInAndOutLinks} variant="contained" color="primary" onClick={logOut}>Log Out</Button>
      <Button className={classes.menuItems} color="inherit"><NavLink to="/" className="btn-floating waves-effect waves-light orange">PP</NavLink></Button>
    </div>
  )
}
export default Presentation
