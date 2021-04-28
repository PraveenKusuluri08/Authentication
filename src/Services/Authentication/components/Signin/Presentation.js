import React from "react"
import { useStyles } from "../../styles/styles"
import { Redirect } from "react-router"
import {
  Card,
  CardActions,
  CardContent,
  Button,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField,
  Paper,
} from "@material-ui/core"
import { Form } from "react-bootstrap"
const Presentation = (props) => {
  const { handleChange, handleSubmit, validateForm } = props
  const classes = useStyles()

  return (
    <div className={classes.signIn}>
      <Paper elevation={6}>
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
