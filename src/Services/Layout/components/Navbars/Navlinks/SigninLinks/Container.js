import React from "react"
import Presentation from "./Presentation"
import { connect } from "react-redux"

import { logOut } from "../../../../../Authentication/middleware/index"
function Container(props) {
  const{logOut} =props
  return (
    <div>
      <Presentation 
      logOut={logOut}
      />
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  }
}
export default connect(null, mapDispatchToProps)(Container)
