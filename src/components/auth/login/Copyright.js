import React from "react";
import { Typography, Link } from "@material-ui/core";
import "./App.css";

export default function Copyright() {
  return (
    <Typography color="textSecondary" align="center">
      {"Copyright ©"}
      <Link
        color="inherit"
        href="https://github.com/OmarAlithawi/Boards-Project"
        target="_blank"
      >
        {"Thinking Hats"}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
