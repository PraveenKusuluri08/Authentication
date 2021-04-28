import React from "react"
import { useStyles } from "../../styles/styles"
//import { Redirect } from "react-router"
import {
  Card,
  CardActions,
  CardContent,
  Button,
 
  TextField,
  Paper,
} from "@material-ui/core"

const Presentation = (props) => {
  const { handleChange, handleSubmit} = props
  const classes = useStyles()

  return (
    <div className={classes.signIn}>
      <Paper elevation={2}>
      <Card className={classes.root}>
        <CardContent>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              id="email"
              required
              label="Email"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              id="password"
              required
              label="Password"
              variant="outlined"
              onChange={handleChange}
            />
            <CardActions>
              <Button variant="contained" type="submit" color="primary">
                Signin
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
      </Paper>
    </div>
  )
}

export default Presentation
