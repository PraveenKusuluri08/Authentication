import React, { Component } from "react"
import Presentation from "./Presentation"
export class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
    
      content: "",
     
    }
  }
handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value,
  })
}
handleSubmit=(e)=>{
  e.preventDefault();
}
  render() {
    return (
      <div>
        <Presentation 
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Container
