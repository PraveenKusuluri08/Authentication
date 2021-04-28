import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
   
  },
  menuItems :{
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  signInAndOutLinks :{
    backgroundColor:"",
    marginRight: theme.spacing(3),
    marginLeft: "auto",
  },
  navLinks:{
    color:"white",
  }
 
}));