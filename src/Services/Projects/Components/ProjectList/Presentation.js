import React from "react"
import ProjectSummary from "../ProjectSummary"
const Presentation = (props) => {
  const {todoValues } = props
  return (
    <div className="project-list section">
      {todoValues &&
        todoValues.map((todoValue) => {
          console.log(todoValue)
          return <ProjectSummary todoValue={todoValue}/>
        })}
    </div>
  )
}

export default Presentation
