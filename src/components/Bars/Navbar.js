import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Logout from "../auth/login/Logout";
import useStyles from "./StyleBars";
// Navbar styled in index.css

export default function Navbar() {

  const classes = useStyles();

  return (
    <div className="navbar-head">
      <NavLink to="/" className="navigation-items">
        Home
      </NavLink>
      <NavLink to="/contact" className="navigation-items">
        Contact
      </NavLink>
      <NavLink to="/about" className="navigation-items">
        About Us
      </NavLink>
      <IconButton style={{ backgroundColor: "transparent" }}>
        <Avatar
          alt="user-avatar"
          className={classes.avatarImage}
          src="https://image.flaticon.com/icons/svg/848/848080.svg"
        />
      </IconButton>
      <Logout />
    </div>
  );
}
