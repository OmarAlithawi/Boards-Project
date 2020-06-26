import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 250,
    marginLeft: "auto",
    marginRight: "auto",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  palette: {
    primary: {
      main: '#66A6FF',
    },
    secondary: {
      main: "#f44336",
    },
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  inputOutline: {
    textAlign: 'center',
    marginLeft: '20px',
    marginBottom: '5x',
  },
  Paper: {
    padding: "20px 10px 20px 10px",
    height: "530px",
    width: "250px",
  },
  listStyleBoard: {
    height: '60px'
  }
}));



export default useStyles;

