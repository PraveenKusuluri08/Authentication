import React, { Component } from "react"
import Presentation from "./Presentation"
export class Container extends Component {
  render() {
    const { todoValue } =this.props
    return (
      <div>
        <Presentation todoValue={todoValue} />
      </div>
    )
  }
}

export default Container
