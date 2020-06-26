import React, { useState } from "react";
import { TextField, Typography, Avatar, Button, FormControl, Grid } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, withRouter } from "react-router-dom";
import Copyright from "./Copyright";
import firebase from "../firebase";
import useStyles from "./StyleLogin";
import loginImage from "./4380.jpg";
import "./App.css";

function Login(props) {
  
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.container}>
      <img src={loginImage} alt="team" className={classes.loginImage} />
      <main className={classes.main}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon className={classes.lockicon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => e.preventDefault() && false}
        >
          <FormControl margin="normal" required fullWidth>
            <TextField
              name="email"
              variant="outlined"
              required
              fullWidth
              label="Email Address"
              autoFocus
              className={classes.email}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
              name="password"
              variant="outlined"
              color="default"
              required
              fullWidth
              label="Password"
              type="password"
              className={classes.password}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={login}
            className={classes.submit}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Button size="small" className={classes.newButtons}>
                Forgot password?
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/signup"
                className={classes.newButtons}
              >
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
          <Copyright className="copyright" />
        </form>
      </main>
    </div>
  );
  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(Login);
