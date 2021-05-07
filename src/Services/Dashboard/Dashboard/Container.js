import React, { Component } from 'react'
import Presentation from "./Presentation"
import {connect} from 'react-redux'
export class Container extends Component {
  render() {
    const{todoValues}=this.props
    return (
      <div>
        <Presentation todoValues={todoValues}/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    todoValues :state.todoItems.todos.todo
  }
}
export default connect(mapStateToProps) (Container)
