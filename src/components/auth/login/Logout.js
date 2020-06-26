import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./StyleLogin";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";

const ITEM_HEIGHT = 48;

function Logout(props) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className={classes.logoutIcon} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounte
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { maxHeight: ITEM_HEIGHT * 4, width: "15ch" },
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
  async function logout() {
    await firebase.signout();
    props.history.push("/login");
  }
}

export default withRouter(Logout);
