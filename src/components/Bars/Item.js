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
  import {currentBoardIDAction , boardNameAction} from '../../actions'   
  import useStyles from "./StyleBars";
  import { useDispatch } from "react-redux";

export default function Item(props) {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const boardsIds = props.allBoardsIds;
    const boardId = boardsIds[props.index];

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
