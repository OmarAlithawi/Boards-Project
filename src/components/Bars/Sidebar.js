import React, { useState } from "react";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Appbar from "./Appbar";
import useStyles from "./StyleBars";
import { db } from "../auth/firebase";
import {
  currentBoardIDAction,
  collectionNameAction,
  boardsIDsAction,
  boardNameAction,
} from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  const [hatsName, setHatsName] = useState("");

  const history = useHistory();

  function changeRouteBoard() {
    history.push("/board");
  }

  function changeRouteHome() {
    history.push("/");
  }

  const createBoards = async () => {
    const collectionsNames = [
      "blue-hat",
      "yellow-hat",
      "white-hat",
      "red-hat",
      "black-hat",
      "green-hat",
    ];
    const createBoard = await db.collection("container").add({
      projectName: hatsName,
    });
    collectionsNames.forEach(async (collection) => {
      const createCollections = await db
        .collection("container")
        .doc(createBoard.id)
        .collection(collection)
        .add({});
    });
    dispatch(currentBoardIDAction(createBoard.id));
    dispatch(collectionNameAction(collectionsNames));
    dispatch(boardsIDsAction(createBoard.id));
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Appbar />
        <Toolbar className={classes.toolbar} />
        <List>
          {["Dashboard", "Starred"].map((text, index) => (
            <ListItem onClick={changeRouteHome} button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <DashboardIcon className={classes.icons} />
                ) : (
                  <GradeRoundedIcon className={classes.icons} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />

        <IconButton
          className={classes.plusButton}
          style={{ backgroundColor: "transparent" }}
        >
          <TextField
            className={classes.textField}
            name={hatsName}
            onChange={(e) => setHatsName(e.target.value)}
          />
          <AddCircleRoundedIcon
            onClick={(e) => {
              createBoards();
              dispatch(boardNameAction(hatsName));
              changeRouteBoard();
            }}
            className={classes.plusButtonInside}
          />
        </IconButton>

        {/* Here will be the created project names/lists  by user  */}
        <List>
          {["React Project", "JavaScript", "TypeScript As..."].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {" "}
                <LabelImportantIcon className={classes.icons} />{" "}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

/**
   const input = e.target.parentNode.firstChild.value
              console.log(input);
 */

/*
  
  const createBoards = async() =>{
  
    const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
    const createBoard = await db.collection('container').add({
      projectName : hatsName
    });
    collectionsNames.forEach( async(collection) => {
    const createCollections = await db.collection('container').doc(createBoard.id).collection(collection).add({});
  })
  dispatch(currentBoardIDAction(createBoard.id));
  dispatch(collectionNameAction(collectionsNames));
  dispatch(boardsIDsAction(createBoard.id));
  
  }


  const createBoards = async() =>{
  
    const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
    const createBoard = await db.collection('container').add({
      'black-hat': {},
      'white-hat': {},
      'blue-hat':{},
      'red-hat':{},
      'green-hat':{},
      'yellow-hat':{}
    });
    
  dispatch(currentBoardIDAction(createBoard.id));
  dispatch(collectionNameAction(collectionsNames));
  dispatch(boardsIDsAction(createBoard.id));
  
  }
 */
