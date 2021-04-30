import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import {connect} from "react-redux"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useStyles } from "../../../styles/styles"
import SigninLinks from "../Navlinks/SigninLinks"
import SignoutLinks from "../Navlinks/SignoutLinks"
function Presentation() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Toolbar className={classes.signInAndOutLinks}>
            <SigninLinks />
            <SignoutLinks />
          </Toolbar>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}
const mapStateToProps=(state)=>{
  console.log(state.firebase.auth)
  return{
    authStatus:state.firebase.auth
  }
}
export default connect(mapStateToProps) (Presentation)
