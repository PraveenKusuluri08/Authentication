import React, { Component } from "react"
import Presentation from "./Presentation"

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
   
  }

validateForm=(values)=>{
  const errors ={};
  if(!values.this.state.email){
    errors.this.state.email ="Required"
  }
  if (!values.this.state.password) {
    errors.this.state.password = 'Required';
  }
  return errors;
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


export default Container
