import { makeStyles } from '@material-ui/core/styles';

export const useStyles =makeStyles((theme) =>({
  root: {
    minWidth: 275,
    display: "flex",
    flexWrap: "wrap",
    
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  form :{
    '& > *': {
      margin: theme.spacing(6),
      width: '85ch',
    },
  },
 signUp :{
  margin: theme.spacing(6),
 },
 signIn :{
  margin: theme.spacing(6),
 }
}))