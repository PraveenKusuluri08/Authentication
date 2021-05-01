import React, { Component } from "react"
import Presentation from "./Presentation"
export class Container extends Component {
  render() {
    const { todo } =this.props
    return (
      <div>
        <Presentation todo={todo} />
      </div>
    )
  }
}

export default Container
