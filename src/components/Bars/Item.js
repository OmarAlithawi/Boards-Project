import React from 'react'
import {
    Drawer,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    TextField
    
  } from "@material-ui/core";
  import LabelImportantIcon from "@material-ui/icons/LabelImportant";
  import {currentBoardIDAction , boardNameAction , deleteBoardNameAction ,deleteBoardIDAction} from '../../actions'   
  import useStyles from "./StyleBars";
  import { useDispatch } from "react-redux";
  import { useHistory } from "react-router-dom";
  import { db } from "../auth/firebase";

  
export default function Item(props) {
    const classes = useStyles();
  const history = useHistory();
    
    const dispatch = useDispatch();
    const boardsIds = props.allBoardsIds;
    const boardId = boardsIds[props.index];

    function changeRouteBoard() {
      history.push("/board");
    }

    const deleteItem = (e) => {
      e.preventDefault();
      e.persist();
      const collectionName = e.target.parentNode.parentNode.getAttribute("name");
      const listItemId = e.target.parentNode.getAttribute("doc-id");
      db.collection("container")
        .doc(boardId)
        .delete();
      
    };

    const sideBarItem = () =>{
        return(
            <div id={boardId} itemName={props.boardName}>
            <ListItem button  >
              <ListItemIcon>
                {" "}
                <LabelImportantIcon className={classes.icons} />{" "}
              </ListItemIcon>
              <ListItemText primary={props.boardName} onClick = { (e) => {
                const itemId = e.target.parentNode.parentNode.parentNode.id;
                dispatch(currentBoardIDAction(itemId))
                changeRouteBoard();
            }}/>

           <ListItemText primary={"X"} onClick = { (e) => {
                dispatch(deleteBoardNameAction(props.boardName));
                dispatch(deleteBoardIDAction(boardId));
                deleteItem(e)
            }}/>
            
            </ListItem>
            </div>
        )
    }

    return (
        < >
            {sideBarItem()}
        </>
    )
}
