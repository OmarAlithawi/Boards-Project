import React, { useState, useEffect } from "react";
import { db } from "../auth/firebase";
import "../../App.css";
import HatItems from "./HatItems";
import { useSelector, useDispatch } from "react-redux";
import { allItemsIdsAction } from "../../actions";
import useStyles from "./StyleHats";
import { boardNameAction, currentBoardIDAction , boardsIDsAction } from "../../actions";
import { FaRedhat } from 'react-icons/fa';
import {
  Grid,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  FormControl,
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  Collapse,
  Paper

} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#66A6FF',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#66A6FF',
      dark: '#fff',
      contrastText: '#fff',
    },
  },
});

export default function Hat(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const listItemId = useSelector((state) => state.listItemIdReducer);
  const collectionsNames = useSelector((state) => state.collectionNameReducer);
  const [hatItemsData, setHatItemsData] = useState([]);
  const currentBoardId = useSelector((state) => state.currentBoardIDReducer);
  const [isOpen, setIsOpen] = useState(true);
  const [sortedHatItemsData, setSortedHatItemsData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  // to retrieve the data immediately

  const liveUpdateData = async () => {
    if (props.boardID) {
      await db
        .collection("container")
        .doc(props.boardID)
        .collection(props.collectionName)
        .onSnapshot((snapshot) => {
          let changes = snapshot.docChanges();
          changes.forEach((change) => {
            const objectNotEmpty = Object.keys(change.doc.data()).length > 0;
            if (change.type === "added" && objectNotEmpty) {
              setHatItemsData((hatItemsData) => [...hatItemsData, change.doc]);
              dispatch(allItemsIdsAction(change.doc.id));

              
            } else if (change.type === "modified" && objectNotEmpty) {
              setHatItemsData((hatItemsData) => {
                // Internally, it tracks hatItemsData as "somearray0". Even if you change
                // the contents of the array, it's still "somearray0" that's returned.

                const replacedId = change.doc.id;
                const indexToReplace = hatItemsData.findIndex(
                  (d) => d.id === replacedId
                );
                /// This "duplicates" the array's contents into "somearray1". Thus when
                // we return `result` it gives us a "new value" from JavaScript's perspective.
                const result = hatItemsData.slice();
                result[indexToReplace] = change.doc;
                // If your update function returns the exact same value as the current state,
                // the subsequent rerender will be skipped completely.
                // delete
                hatItemsData[indexToReplace] = change.doc;
                return result;
              });
            }
          });
        });
    }
  };

  

  const expandOrNot = () => {
    setIsOpen(!isOpen);
  };

 

  useEffect(() => {
    liveUpdateData();
    setHatItemsData([]);
  }, [props.boardID]);

 

  // to filter the array of data

  const deleteListItemFromState = (id) => {
    const filteredObjectsData = hatItemsData.filter((doc) => {
      return doc.id !== id;
    });
    setHatItemsData((hatItemsData) => filteredObjectsData);
    setSortedHatItemsData((sortedHatItemsData) => [...filteredObjectsData]);

  };

  /*
  const deleteListItemFromSortedState = (id) => {
    const filteredObjectsData = hatItemsData.filter((doc) => {
      return doc.id !== id;
    });
    setHatItemsData((hatItemsData) => filteredObjectsData);
    setSortedHatItemsData((sortedHatItemsData) => [...filteredObjectsData]);
  };
  */

  // delete item

  const deleteItem = (e) => {
    e.preventDefault();
    e.persist();
    const collectionName = e.target.parentNode.parentNode.getAttribute("name");
    const listItemId = e.target.parentNode.getAttribute("doc-id");
    db.collection("container")
      .doc(currentBoardId)
      .collection(collectionName)
      .doc(listItemId)
      .delete();
    deleteListItemFromState(listItemId);
    
  };

  // update item

  const updateItem = (e, listItemId, inputValue) => {
    e.preventDefault();
    e.persist();
    db.collection("container")
      .doc(currentBoardId)
      .collection(props.collectionName)
      .doc(listItemId)
      .update({ todo: inputValue });
   
  };

  // add item

  const postData = async (e) => {
    e.preventDefault();
    e.persist();
    const inputValue = e.target[0].value;
    const collectionName = e.target[0].name;
    await db
      .collection("container")
      .doc(props.boardID)
      .collection(props.collectionName)
      .add({
        todo: inputValue,
      });
    e.target.reset();
  };

  // display the items as a list items

  const displayItemsAsList = () => {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <InputLabel id="label">{props.collectionName}</InputLabel>
        <ListItem button onClick={expandOrNot}>
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              {
                <HatItems
                  updateItem={updateItem}
                  deleteItem={deleteItem}
                  name={props.collectionName}
                  data={hatItemsData}
                />
              }
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  };

  // display the items as a board items

  const displayItemsAsBoard = () => {
    return (
      <div>
        { 
          <HatItems
            updateItem={updateItem}
            open={props.open}
            deleteItem={deleteItem}
            name={props.collectionName}
            data={hatItemsData}
            className="notSortedHatItems"
          />
       }
      </div>
    );
  };

  
  return (
    <div className="column">
    <ThemeProvider theme={theme}>
    <Paper className={classes.Paper} elevation={1} square >
          <Typography className="board-title">
            <FaRedhat className="hat-icon" style={{ color: props.colorsArray }} />
          </Typography>
    <form className="addItemForm" onSubmit={(e) => postData(e)}>
      <TextField 
      id="outlined-basic"
      className={classes.inputOutline}
      type="text"
      name={props.collectionName}
      label= {props.collectionName}
      placeholder={props.collectionName}
      variant="outlined"
      autoComplete="off" />
      <button onKeyDown={(e) => e.key === "Enter" && postData(e)} className="addItemBtn">
        +
      </button>
    </form>
      <div>
      {props.isBoard ? displayItemsAsBoard() : displayItemsAsList()}
      </div>
    </Paper>
    </ThemeProvider>
  </div>
  );
}
