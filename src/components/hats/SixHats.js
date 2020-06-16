import React,{useState} from 'react';
import Hat from './Hat';
import { Grid , InputLabel , Select , MenuItem , makeStyles , FormControl , Box , List ,ListItem ,Collapse } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useStyles from './StyleHats'
import {useSelector} from 'react-redux';

export default function SixHats(props) {

  const currentBoardId = useSelector(state => state.currentBoardIDReducer);
  const collectionsName =useSelector(state => state.collectionNameReducer);
  const [isBoard , setIsBoard] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const classes = useStyles();

  const expandOrNot = () => {
    setIsOpen(!isOpen);
  };



// render the data as a board

   const renderHatsBoard = () => {
    return collectionsName.map((collection , index) => {
            return(
              <Grid container  >
                  <Grid  container item xs={12} spacing={2}>
                     {<Hat isBoard ={isBoard} isOpen ={isOpen}   key = {index} collectionName = {collection}  boardID = {currentBoardId} />}
                 </Grid>
              </Grid>
            )
        })
   }

// render the data as a list 

   const renderHatsList = () =>{
    return collectionsName.map((collection , index) => {
        return(
             <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}> 
                <InputLabel id ="label">{collection}</InputLabel>
                <ListItem button onClick={expandOrNot} >
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <ListItem >
                    {<Hat  isBoard ={isBoard} isOpen ={isOpen}  key = {index} collectionName = {collection}  boardID = {currentBoardId} />}
                </ListItem>
             </List>
          
        )
    })
   }

    return (
        <div>
            <div className ="toggleBtn"  onClick = {() => setIsBoard(!isBoard)} > {isBoard ? <button>List</button> : <button>Board</button>} </div>
            { isBoard ? <div className="board">{renderHatsBoard()}</div> : renderHatsList() }
        </div>
    )
}

