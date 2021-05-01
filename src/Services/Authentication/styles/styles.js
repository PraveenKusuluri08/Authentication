import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    // display: "flex",
    // flexWrap: "wrap",
  },
  form: {
    "& > *": {
      margin: theme.spacing(6),
      width: "85ch",
      marginRight:theme.spacing(10),
     
    },
  },
  signUp: {
    margin: theme.spacing(10),
    marginRight: theme.spacing(3),
    marginLeft:"auto"
  },
  signIn: {
    margin: theme.spacing(6),
    marginRight: theme.spacing(3),
    marginLeft:"100px"
  },
 
}))
