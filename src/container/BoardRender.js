import React, { useState } from "react";
import Sidebar from "../components/bars/Sidebar";
import SixHats from "../components/hats/SixHats";
import { useSelector } from "react-redux";
import useStyles from "../components/home/StyleHome";
import { Typography } from "@material-ui/core";

export default function BoardRender() {
  const boardName = useSelector((state) => state.boardNameReducer);

  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <main className={classes.boards}>
        <Typography className="heading" component="h1" variant="h5">
          {boardName}
        </Typography>
        <SixHats />
      </main>
    </div>
  );
}

/*
<button onClick = {editingOrEdit}>edit</button>
const [isEditing , setIsEditing] = useState(true);
    const [updatedBoradName , setUpdatedBoradName] = useState("")

    const editingOrEdit = () =>{
        setIsEditing(!isEditing);
    }

    // update board name

    const updateBoardName= () => {
        db.collection("container").doc(currentBoardId).update({ projectName: updatedBoradName });
    filteringListItems(listItemId);
  }

     <div> <input type ="text" onChange = {(e) => setUpdatedBoradName(e.target.value)}/>   <button onClick = {updateBoardName}>change</button> </div>
    */
