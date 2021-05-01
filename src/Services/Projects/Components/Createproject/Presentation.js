import React from "react"
import TextField from "@material-ui/core/TextField"
import { useStyles } from "../../styles/styles"
import { Paper, TextareaAutosize } from "@material-ui/core"
import { Button } from "@material-ui/core"

function Presentation(props) {
  const { handleChange, handleSubmit } = props
  const classes = useStyles()
  return (
    <div>
      <Paper elevation={4}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField id="title" label="Title" variant="outlined" onChange={handleChange} />
         
         
          <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="What ToDo" id="content"onChange={handleChange} />
          <Button variant="contained" type="submit" color="primary">
            Create Project
          </Button>
        </form>
      </Paper>
    </div>
  )
}

export default Presentation
