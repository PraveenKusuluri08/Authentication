import React, { Component } from "react"
import Presentation from "./Presentation"
import { connect } from "react-redux"
class Container extends Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        <Presentation todos={todos} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log( state.todo.todoItems.todos);
  return {
    todos: state.todo.todoItems.todos,
  }
}
export default connect(mapStateToProps)(Container)
