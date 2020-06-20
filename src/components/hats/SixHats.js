import React, { useState , useEffect } from "react";
import Hat from "./Hat";
import { db } from "../auth/firebase";
import {
  Grid,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  FormControl,
  Box,
  List,
  ListItem,
  Collapse,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./StyleHats";
import { boardNameAction, currentBoardIDAction , boardsIDsAction, boardsNamesAction  } from "../../actions";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewWeekIcon from '@material-ui/icons/ViewWeek'



export default function SixHats() {
  const currentBoardId = useSelector((state) => state.currentBoardIDReducer);
  const collectionsName = useSelector((state) => state.collectionNameReducer);
  const [isBoard, setIsBoard] = useState(true);

  const classes = useStyles();
  const dispatch = useDispatch();
  // render the data as a board
 
  const getBoardName = async () => {
    if(currentBoardId.length > 0){ 
   const name =  await db.collection("container").doc(currentBoardId).get();
   dispatch(boardNameAction(name.data().projectName));
    }
  }

  useEffect(() => {
    getBoardName()
  } , [currentBoardId])

  const renderHatsBoard = () => {
     const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
     if(currentBoardId.length > 0){ 
    return collectionsNames.map((collection, index) => {
      return (
        <Grid container key ={index} >
          <Grid container item xs={12} spacing={2}>
            {
              <Hat
                isBoard={isBoard}
                key={index}
                collectionName={collection}
                boardID={currentBoardId}
              />
            }
          </Grid>
        </Grid>
      );
    });
  }
  };

  // render the data as a list

  const renderHatsList = () => {
    const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
    if(currentBoardId.length > 0){ 
    return collectionsNames.map((collection, index) => {
      return (
        <Hat
          isBoard={isBoard}
          key={index}
          collectionName={collection}
          boardID={currentBoardId}
        />
      );
    });
  }
  };



  return (
    <div>
    <div className="toggleBtn" onClick={() => setIsBoard(!isBoard)}>
      {" "}
      {isBoard ? <ViewWeekIcon className="boardIcon" /> : <FormatListBulletedIcon className="listIcon" />}{" "}
    </div>
    {isBoard ? (
      <div className="board">{renderHatsBoard()}</div>
    ) : (
      renderHatsList()
    )}
  </div>
  );
}
