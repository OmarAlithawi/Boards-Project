import React, { useState } from "react";
import Hat from "./Hat";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import {
  Grid,
} from "@material-ui/core";


import useStyles from "./StyleHats";
import { useSelector } from "react-redux";

export default function SixHats() {
  const currentBoardId = useSelector((state) => state.currentBoardIDReducer);
  const collectionsName = useSelector((state) => state.collectionNameReducer);
  const [isBoard, setIsBoard] = useState(true);

  const classes = useStyles();

  // render the data as a board

  const renderHatsBoard = () => {
    // const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
    return collectionsName.map((collection, index) => {
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
  };

  // render the data as a list

  const renderHatsList = () => {
    return collectionsName.map((collection, index) => {
      return (
        <Hat
          isBoard={isBoard}
          key={index}
          collectionName={collection}
          boardID={currentBoardId}
        />
      );
    });
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
