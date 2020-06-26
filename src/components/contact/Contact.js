import React from "react";
import Appbar from "../bars/Appbar";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '350px'
    },
    display: 'block',
  },
  submitBtn: {
    margin: theme.spacing(1),
  },
  contactTitle: {
    margin: theme.spacing(1),
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#66A6FF',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#66A6FF',
      dark: '#fff',
      contrastText: '#fff',
    },
  },
});


export default function Contact() {

  const classes = useStyles();
  

  return (
    <div>
      <Appbar />
      <ThemeProvider theme={theme}>
      <div className="contactus-img-container">
      <img src={require("./contact-us.jpg")} alt="contact-us" />
      </div>
      <div className="contactus-text-container">
        <div className={classes.contactTitle}>
        <h1>Contact Us</h1>
        <h4>We’re all ears.</h4>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Full Name"
              multiline
              rowsMax={4}
              variant="outlined"
            /> <br/>
            <TextField
              id="outlined-multiline-flexible"
              label="E-mail Address"
              multiline
              rowsMax={4}
              variant="outlined"
            /> <br/>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              label="Your Message"
              variant="outlined"
            /><br/>
            <Button variant="contained" className={classes.submitBtn} color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
      </ThemeProvider>
    </div>
  );
}