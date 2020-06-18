import React from "react";
import Navbar from "./Navbar";
import useStyles from "./StyleBars";
import AppBar from "@material-ui/core/AppBar";

export default function Appbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Navbar className={classes.navbar} />
    </AppBar>
  );
}
