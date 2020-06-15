import { makeStyles } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 250,
      marginLeft:"auto",
      marginRight:"auto"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: '#f44336',
        },
      },root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
  }));

  export default useStyles;