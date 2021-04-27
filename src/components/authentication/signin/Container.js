import React, { Component } from "react"
import Presentation from "./Presentation"

import {logIn} from "../../../store/middleware/middleWare"
import { connect } from "react-redux"
import { Redirect } from "react-router"
class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.logIn(this.state)
  }

  render() {
    const { authError,auth } = this.props
    // if(auth.uid)return <Redirect to ="/"/>
    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          authError={authError}
          auth={auth}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.firebase.auth.uid)
  return {
    authError: state.auth.authError,
    auth:state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => {
      dispatch(logIn(creds))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
