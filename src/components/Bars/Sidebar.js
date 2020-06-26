import React, { useState } from "react";
import SidebarItems from './SidebarItems'
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
import AddIcon from '@material-ui/icons/Add';
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Appbar from "./Appbar";
import useStyles from "./StyleBars";
import { db } from "../auth/firebase";
import {
  currentBoardIDAction,
  collectionNameAction,
  boardsIDsAction,
  boardNameAction,
  boardsNamesAction
} from "../../actions";
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export default function Sidebar() {
  const dispatch = useDispatch();
  const [hatsName, setHatsName] = useState("");
  const [boardNameArray, setBoradNameArray] = useState([]);
  //const [boardsNames, setBoradsNames] = useState([]);
  const allBoardsIds = useSelector((state) => state.boardsIDsReducer);
  const boardName = useSelector((state) => state.boardNameReducer);
  const currentBoardId = useSelector((state) => state.currentBoardIDReducer);
  const boardsNames = useSelector((state) => state.boardsNamesReducer);
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
    //dispatch(boardsIDsAction(createBoard.id))
   // setBoradsNames(boardsNames =>  [hatsName , ...boardsNames])
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
        <div className={classes.projectNameInputContainer}>
        <TextField
          className={classes.textField}
          name={hatsName}
          onChange={(e) => {
            e.persist()
            setHatsName(e.target.value)
            setBoradNameArray([e.target.value]);
          }}
        />
        <IconButton onClick={(e) => {
            createBoards();
            changeRouteBoard();
          }}
          className={classes.plusButton}
          style={{ backgroundColor: "transparent" }}
          >
          <AddIcon className={classes.plusButtonInside} />
        </IconButton>
        </div>

        {/* Here will be the created project names/lists  by user  */}
        
        {console.log(boardsNames)}

        <List>
          {boardsNames.map((boardName , index) => (
            <SidebarItems  boardId = {currentBoardId} allBoardsIds = {allBoardsIds} index = {index} key={index} boardName = {boardName} />
          ))}
        </List>
      </Drawer>
      
    </div>
  );
}

