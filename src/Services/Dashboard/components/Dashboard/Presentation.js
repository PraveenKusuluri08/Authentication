import React from 'react'
//import Project from "../../Project/ProjectList"
import ProjectList from "../../../Projects/Components/ProjectList"
function Presentation({todos}) {
  return (
    <div className="dashboard container">
    <div className="row">
    
      <div className="col s12 m6">
      <ProjectList todos={todos}/>
     
      </div>
      <div className="col s12 m5 offset-m1">
      
      </div>
    </div>
  </div>
  )
}

export default Presentation
