import React from 'react'

const Presentation = ({todoValue}) => {
  return (
    <div  className="card z depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
      <span className="card-title">{todoValue.title}</span>
      <p>{todoValue.content}</p>
      <p className="grey-text">30/08/2021</p>
      </div>
    </div>
  )
}

export default Presentation
