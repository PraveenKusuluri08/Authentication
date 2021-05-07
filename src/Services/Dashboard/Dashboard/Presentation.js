import React from "react"
import ProjectList from "../../Projects/Components/ProjectList"
function Presentation({ todoValues }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col 12 m6">
          <ProjectList todoValues={todoValues} />
        </div>
        <div className="col s12 m5 offser-m1"></div>
      </div>
    </div>
  )
}

export default Presentation
