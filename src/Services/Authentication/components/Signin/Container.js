import React, { Component } from "react"
import Presentation from "./Presentation"
import {connect} from "react-redux"

import {logIn} from "../../middleware/index"
import { CodeSharp } from "@material-ui/icons"
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

    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
         validateForm={this.validateForm}
        />
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    logIn :(creds)=>dispatch(logIn(creds))
  }
}
export default connect(null,mapDispatchToProps) (Container)
