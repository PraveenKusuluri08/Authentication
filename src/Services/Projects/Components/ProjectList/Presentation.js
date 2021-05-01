import React from "react"
import ProjectSummary from "../ProjectSummary"
const Presentation = (props) => {
  const {todos } = props
  return (
    <div className="project-list section">
      {todos &&
        todos.map((todo) => {
          console.log(todo)
          return <ProjectSummary todo={todo}/>
        })}
    </div>
  )
}

export default Presentation
