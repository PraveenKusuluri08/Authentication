import React, { Component } from 'react'
import Presentation from "./Presentation"
import {connect} from "react-redux"
export class Container extends Component {
  render() {
    const{authStatus} =this.props
    return (
      <div>
        <Presentation
        authStatus={authStatus}
        />
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  console.log(state.firebase.auth)
  return{
    authStatus:state.firebase.auth
  }
}
export default connect(mapStateToProps) (Container)
