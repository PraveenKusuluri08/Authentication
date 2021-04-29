import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(9),
      width: "85ch",
    },
  },
  form: {
    "& > *": {
      marginTop: "40px",
      margin: theme.spacing(6),
      width: "85ch",
    },
  },
  textFields :{
    marginRight: theme.spacing(3),
    width: "85ch",
  }
}));