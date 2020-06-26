import React, { useState , useEffect } from "react";
import Sidebar from "../components/bars/Sidebar";
import SixHats from "../components/hats/SixHats";
import useStyles from "../components/home/StyleHome";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../components/auth/firebase";
import { boardNameAction, currentBoardIDAction , boardsIDsAction, boardsNamesAction  } from "../actions";

export default function BoardRender() {
  const boardName = useSelector((state) => state.boardNameReducer);

  const dispatch = useDispatch();
  const liveUpdataBoardsIds = async () =>{
    await db
        .collection("container")
        .onSnapshot((snapshot) => {
          let changes = snapshot.docChanges();
          changes.forEach((change) => {
            const objectNotEmpty = Object.keys(change.doc.data()).length > 0;
            if (change.type === "added" && objectNotEmpty) {
              console.log(change.doc.data().projectName);
              dispatch(boardsNamesAction(change.doc.data().projectName))
              dispatch(boardsIDsAction(change.doc.id));
              
            }
          })
        })
  }

  

  useEffect(() =>{
    console.log("use effect is working")
    liveUpdataBoardsIds();
  }, [])

  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <main className={classes.boards}>
        <Typography className="board-title-top" component="h1" variant="h5">
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
