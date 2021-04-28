import { Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStyles } from '../../../../styles/styles'
const Presentation = () => {
  const classes = useStyles()
  return (
    <div>
      <ul>
      <Button className={classes.signInAndOutLinks} variant="contained" color="primary"><NavLink className={classes.navLinks} to="/signup">SignUp</NavLink></Button>
      <Button className={classes.signInAndOutLinks} variant="contained" color="primary"><NavLink className={classes.navLinks} to="/signin">LogIn</NavLink></Button>
      </ul>
    </div>
  )
}

export default Presentation
