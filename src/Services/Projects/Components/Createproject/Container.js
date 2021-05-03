import React, { Component } from "react"
import Presentation from "./Presentation"
import {connect} from "react-redux"
import { todoData } from "../../middleware"
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
 this.props.todoData(this.state)
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
const mapDispatchToProps = (dispatch)=>{
  return{
    todoData :(to_do)=>dispatch(todoData(to_do))
  }
}
export default connect(null,mapDispatchToProps) (Container)
// export default Container