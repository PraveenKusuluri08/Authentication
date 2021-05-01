import React, { Component } from 'react'
import Presentation from "./Presentation"
export class Container extends Component {
  render() {
    const {todos} =this.props
    console.log(todos)
    return (
      <div>
        <Presentation todos={todos}/>
      </div>
    )
  }
}

export default Container
