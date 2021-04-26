import React, { Component } from "react"
import Presentation from "./Presentation"

import { loginSuccess } from "../../../store/actions/actionCreators"
//import {logIn} from "../../../store/middleware/middleWare"
import { connect } from "react-redux"
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
    const { authError } = this.props
    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          authError={authError}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => {
      dispatch(loginSuccess(creds))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)
