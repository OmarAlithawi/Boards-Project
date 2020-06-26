import React, { useState , useEffect } from "react";
import Hat from "./Hat";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import { db } from "../auth/firebase";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./StyleHats";
import { boardNameAction, currentBoardIDAction , boardsIDsAction, boardsNamesAction  } from "../../actions";


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
     const collectionsNames = ['Blue Hat' , 'Yellow Hat' , 'White Hat' , 'Red Hat' , 'Black Hat' , 'Green Hat'];
    const colorsArray = ['rgb(29, 171, 252)', 'rgb(254,	211,	49)', '#999999', 'rgb(214	57	84)', '#000', 'rgb(58,	190,	190)'];
     if(currentBoardId.length > 0){ 
    return collectionsNames.map((collection, index) => {
      return (
        <Grid container className="container-title" key ={index} >
          <Grid container item xs={12} spacing={2}>
            {
              <Hat
                isBoard={isBoard}
                key={index}
                collectionName={collection}
                colorsArray={colorsArray[index]}
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
    const collectionsNames = ['Blue Hat', 'Yellow Hat', 'White Hat', 'Red Hat', 'Black Hat', 'Green Hat'];
    const colorsArray = ['#98E1F9', '#FFDC8C', '#999999', '#FF7C9B', '#000', '#91EAD2'];
    if(currentBoardId.length > 0){ 
    return collectionsNames.map((collection, index) => {
      return (
        <Hat
          isBoard={isBoard}
          key={index}
          collectionName={collection}
          colorsArray={colorsArray[index]}
          boardID={currentBoardId}
          className={classes.listStyleBoard}
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
