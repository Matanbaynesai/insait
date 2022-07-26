
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  balance:{
    fontFamily:"Roboto, Helvetica, Arial, sans-serif",
  },
  input:{
    padding:"5px" ,
    borderTop:"none",
    borderRight:"none",
    borderLeft:"none",
  },
  inputContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"spacebetween",
    padding:"10px" 
  },
  container:{
    display:"flex" ,
    flexDirection:"column",
    justifyContent:"space-between",
    height:"150vh"
  },
  query:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    height:"350px"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
